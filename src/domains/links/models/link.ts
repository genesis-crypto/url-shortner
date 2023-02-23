import { Database } from '../../../shared/configs/database'

interface Link {
    id: string,
    url: string,
    hash: string,
    user_id: string,
    created_at: unknown,
    updated_at: unknown
}

export class LinkModel {
    link_table

    constructor() {
        this.link_table = () => Database.getInstance()<Link>('links')
    }

    async getAllLinks(page: number) {
        return await this.link_table().paginate({ perPage: 10, currentPage: page })
    }

    async getOneLink(uuid: string) {
        return await this.link_table().select('*').where('id', '=', uuid)
    }

    async updateOneLink(uuid: string, payload: Record<string, any>) {
        return await this.link_table().update(payload).where('id', '=', uuid).then(() => true).catch(() => false)
    }

    async deleteOneLink(uuid: string) {
        return await this.link_table().delete().where('id', '=', uuid).then(() => true).catch(() => false)
    }

    async createOneLink(payload: Record<string, any>) {
        return await this.link_table().insert(payload).then(() => true).catch(() => false)
    }

    async getLinkByHash(hash: string) {
        return await this.link_table().select('*').where('hash', '=', hash)
    }
}