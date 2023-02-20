import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTableIfNotExists('users', (table) => {
        table.uuid('id').primary()
        table.string('name').notNullable()
        table.timestamps()
    })
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTableIfExists('users')
}

