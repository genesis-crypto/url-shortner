import { Request, Response } from 'express'
import { LinkModel } from '../models/link'
import { Controller } from '../../../shared/interfaces/controller.interface'

export class GetManyLinks implements Controller {
    async handle(req: Request, res: Response) {
        const query = req.query

        if (!query.page) {
            return res.status(400).json({message: 'missing param'})
        }

        const page = parseInt(query.page as string)
        
        const data = await new LinkModel().getAllLinks(page)

        return res.status(200).send(data)
    }
}