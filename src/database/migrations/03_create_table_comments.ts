import Knex from 'knex';

async function up(knex:Knex) {
    return knex.schema.createTable('comments', table =>{
        table.increments('id').primary();
        table.boolean('content').notNullable();
        table.dateTime('date').notNullable();
    });
}

async function down(knex:Knex) {
    return knex.schema.dropTableIfExists('comments');
}

export { up, down };