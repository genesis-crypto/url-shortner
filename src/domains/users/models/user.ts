import knex, { Knex } from "knex";
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
        return await this.user_table().paginate({ perPage: 10, currentPage: page })
    }

    async getOneUser(uuid: string) {
        return await this.user_table().select('*').where('id', '=', uuid)
    }

    async updateOneUser(uuid: string, payload: Record<string, any>) {
        return await this.user_table().update(payload).where('id', '=', uuid)
    }

    async deleteOneUser(uuid: string) {
        return await this.user_table().delete().where('id', '=', uuid)
    }

    async createOneUser(payload: Record<string, any>) {
        return await this.user_table().insert(payload).then(() => true).catch(() => false)
    }
}