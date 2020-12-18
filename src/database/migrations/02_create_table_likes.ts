import Knex from 'knex';

async function up(knex:Knex) {
    return knex.schema.createTable('likes', table =>{
        table.increments('id').primary();
        table.boolean('status').notNullable();
        table.dateTime('date').notNullable();

    });
}

async function down(knex:Knex) {
    return knex.schema.dropTableIfExists('likes');
}

export { up, down };