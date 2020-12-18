import Knex from 'knex';

async function up(knex:Knex) {
    return knex.schema.createTable('occurrences', table =>{
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('content').notNullable();
        table.string('image').notNullable();

        table.float('latitude').notNullable();
        table.float('longitude').notNullable();

        table.integer('like').unsigned();
        table.integer('comment').unsigned();

        //foreigns o bus fazer recursos ainda

        table.string('bus').notNullable();

        
        table.foreign('like').references('likes.id')
        table.foreign('comment').references('comments.id')

    })
}
async function down(knex:Knex) {
    return knex.schema.dropTableIfExists('occurrences');
}


export { up, down };