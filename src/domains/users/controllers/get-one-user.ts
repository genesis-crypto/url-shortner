import { Request, Response } from "express";

export class GetOneUser {
    constructor() {}

    handle(req: Request, res: Response) {
        res.send('hi')
    }
}