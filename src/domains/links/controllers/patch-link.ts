import { Request, Response } from 'express'
import { LinkModel } from '../models/link'
import { Controller } from '../../../shared/interfaces/controller.interface'

export class PatchLink implements Controller {
    async handle(req: Request, res: Response) {
        const {params, body} = req

        if (!body.url) {
            return res.status(400).send('missing content or params')
        }

        const result = await new LinkModel().updateOneLink(params.uuid, body)

        return res.status(200).send(result)
    }    
}