import { Request, Response } from 'express'
import { Controller } from '../../../shared/interfaces/controller.interface'

export class PatchUser implements Controller {
    async handle(req: Request, res: Response) {
        return res.status(200).send('todo')
    }
}