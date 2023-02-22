import { Request, Response } from 'express'
import { UserModel } from '../models/user'
import { Controller } from '../../../shared/interfaces/controller.interface'

export class GetOneUser implements Controller{
    async handle(req: Request, res: Response) {
        const params = req.params

        if (!params.uuid) {
            return res.status(400).json({ message: 'missing param' })
        }
        const data = await new UserModel().getOneUser(params.uuid as string)

        return res.status(200).send({ data })
    }
}