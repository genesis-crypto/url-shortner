import { Request, Response } from "express";
import { UserModel } from "../models/user";

export class GetOneUser {
    constructor() { }

    async handle(req: Request, res: Response) {
        const params = req.params

        if (!params.uuid) {
            return res.status(400).json({ message: 'Missing param' })
        }
        const data = await new UserModel().getOneUser(params.uuid as string)

        return res.status(200).send({ data })
    }
}