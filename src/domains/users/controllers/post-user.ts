import { Request, Response } from 'express'
import { Controller } from '../../../shared/interfaces/controller.interface'
import { UserModel } from '../models/user'
import { v4 as uuidv4 } from 'uuid'

export class PostUser implements Controller {
    async handle(req: Request, res: Response) {
        const body = req.body

        if (!body.name) {
            return res.status(400).send('missing content')
        }

        const payload = {
            id: uuidv4(),
            name: body.name
        }

        const result = await new UserModel().createOneUser(payload)
        console.log(result)
        if (!result) {
            return res.status(500).send('failed to create user')
        }

        return res.status(201).send()
    }
}