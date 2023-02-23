import { Request, Response } from 'express'
import { LinkModel } from '../models/link'
import { Controller } from '../../../shared/interfaces/controller.interface'
import { v4 as uuidv4 } from 'uuid'
import shortid from 'shortid'

export class PostLink implements Controller {
    async handle(req: Request, res: Response) {
        const body = req.body

        if (!body.url || !body.user_id) {
            return res.status(400).send('missing content')
        }

        const hash = shortid.generate();
        
        const payload = {
            id: uuidv4(),
            url: body.url,
            hash,
            user_id: body.user_id
        }
        
        const result = await new LinkModel().createOneLink(payload)

        if (!result) {
            return res.status(500).send('failed to create user')
        }

        return res.status(201).send()
    }    
}