import { Request, Response } from "express";
import { UserModel } from '../models/user'

export class GetManyUser {

    constructor() {
    }

    async handle(req: Request, res: Response) {
        const query = req.query

        if (!query.page) {
            return res.status(400).json({message: 'Missing param'})
        }

        const page = parseInt(query.page as string)
        
        const data = await new UserModel().getAllUsers(page)

        return res.status(200).send({data})
    }
}