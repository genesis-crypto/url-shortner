import { Request, Response } from 'express'
import { UserModel } from '../models/user'
import { Controller } from '../../../shared/interfaces/controller.interface'
import { Cache } from '../../../shared/configs/cache'
import util from 'util'

export class GetOneUser implements Controller{
    async handle(req: Request, res: Response) {
        const params = req.params

        if (!params.uuid) {
            return res.status(400).json({ message: 'missing param' })
        }
        const redisClient = Cache.getInstance()
        await redisClient.connect()

        const redisGetAsync = util.promisify(redisClient.get).bind(redisClient)
        const cachedData = await redisGetAsync(`user:${params.uuid}`)
        
        if (cachedData) {
            const parsedData = JSON.parse(cachedData)
            return res.status(200).send({ data: parsedData })
        }

        const data = await new UserModel().getOneUser(params.uuid as string)
        
        redisClient.set(`user:${params.uuid}`, JSON.stringify(data))

        return res.status(200).send({ data })
    }
}