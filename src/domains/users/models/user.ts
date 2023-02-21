import { Knex } from "knex";
import { Database } from '../../../shared/configs/database'

interface User {
    id: string,
    name: string,
    created_at: unknown,
    updated_at: unknown
}

export class UserModel {
    user_table

    constructor() {
        this.user_table = () => Database.getInstance()<User>('users')
    }

    async getAllUsers(page: number) {
        return await this.user_table().paginate({perPage: 10, currentPage: page})
    }

    async getOneUser(uuid: string) {
        return await this.user_table().select('*').where('id', '=', uuid)
    }
}