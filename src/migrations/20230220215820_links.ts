import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTableIfNotExists('links', (table) => {
        table.uuid('id').primary()
        table.string('url').notNullable()
        table.string('hash').notNullable()
        table.uuid('user_id').references('id').inTable('users').notNullable().onDelete('CASCADE')
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTableIfExists('links')
}

