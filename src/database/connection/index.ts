import knex  from "knex";


const con = knex({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'node_typescript'
    },
    useNullAsDefault:true
})



export default con;