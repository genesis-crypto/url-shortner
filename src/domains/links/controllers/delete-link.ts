import { Request, Response } from 'express'
import { LinkModel } from '../models/link'
import { Controller } from '../../../shared/interfaces/controller.interface'

export class DeleteLink implements Controller {
    async handle(req: Request, res: Response) {
        const params = req.params

        if (!params.uuid) {
            return res.status(400).json({ message: 'missing param' })
        }

        const result = new LinkModel().deleteOneLink(params.uuid)

        if (!result) {
            return res.status(500).send('failed to delete')
        }

        return res.status(200).send()    
    }    
}