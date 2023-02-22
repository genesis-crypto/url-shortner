import { Request, Response } from 'express'
import { Controller } from '../../../shared/interfaces/controller.interface'
import { UserModel } from '../models/user'

export class PatchUser implements Controller {
    async handle(req: Request, res: Response) {
        const {params, body} = req

        if (!body.name || !params.uuid) {
            return res.status(400).send('missing content or params')
        }

        const result = await new UserModel().updateOneUser(params.uuid, body)

        return res.status(200).send(result)
    }
}