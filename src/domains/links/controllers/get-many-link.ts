import { Request, Response } from 'express'
import { LinkModel } from '../models/link'
import { Controller } from '../../../shared/interfaces/controller.interface'
import { Cache } from '../../../shared/configs/cache'
import util from 'util'

export class GetManyLinks implements Controller {
    async handle(req: Request, res: Response) {
        const query = req.query

        if (!query.page) {
            return res.status(400).json({message: 'missing param'})
        }

        const page = parseInt(query.page as string)

        const redisClient = Cache.getInstance()
        await redisClient.connect()
        const cachedData = await redisClient.get(`pages_${page}`)

        if (cachedData) {
            return res.status(200).send(JSON.parse(cachedData))
        }

        const data = await new LinkModel().getAllLinks(page)

        await redisClient.set(`pages_${page}`, JSON.stringify(data))

        return res.status(200).send(data)
    }
}