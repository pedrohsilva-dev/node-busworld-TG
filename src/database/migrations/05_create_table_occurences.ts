import Knex from 'knex';

async function up(knex:Knex) {
    return knex.schema.createTable('occurrences', table =>{
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('content').notNullable();
        table.string('image').notNullable();

        //location
        table.float('latitude').notNullable();
        table.float('longitude').notNullable();

        //values foreign key
        table.integer('like').unsigned().notNullable();
        table.integer('comment').unsigned().notNullable();
        table.integer('bus').unsigned().notNullable();
        table.integer('user').unsigned().notNullable();

        //foreigns
        table.foreign('like').references('likes.id');
        table.foreign('comment').references('comments.id');
        table.foreign('bus').references('buses.id');
        table.foreign('user').references('users.id');

    })
}
async function down(knex:Knex) {
    return knex.schema.dropTableIfExists('occurrences');
}


export { up, down };