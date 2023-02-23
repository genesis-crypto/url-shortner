import { Request, Response } from 'express'
import { Controller } from '../../../shared/interfaces/controller.interface'
import { LinkModel } from '../models/link'

export class RedirectLink {
    async handle(req: Request, res: Response) {
        const {hash} = req.params
        if (!hash) {
            return res.status(400).send('missing content')
        }

        const [data] = await new LinkModel().getLinkByHash(hash)

        return res.redirect(data.url)
    }
}