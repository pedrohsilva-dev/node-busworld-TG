import Knex from 'knex';

async function up(knex:Knex) {
    return knex.schema.createTable('buses', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('row').notNullable();
        table.string('company').notNullable();
        table.string('contact').notNullable();
        table.string('email').notNullable();
    })
}
async function down(knex:Knex) {
    return knex.schema.dropTableIfExists('buses');
}


export { up, down };