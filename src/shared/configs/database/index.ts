import knex, {Knex} from 'knex'
import {attachPaginate} from 'knex-paginate'

class Database {
    private static instance: Knex

    private constructor() {}

    public static getInstance(): Knex {
        if (!Database.instance) {
            Database.instance = knex({
                client: 'mysql',
                connection: {
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT as string),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME
                }
            })
            attachPaginate()
        }

        return Database.instance
    }


}

export { Database }