import Knex from 'knex';

async function up(knex:Knex) {
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary(),
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('location').notNullable();
        table.string('data_nascimento').notNullable();

    })
}
async function down(knex:Knex) {
    return knex.schema.dropTableIfExists('users');
}


export { up, down };