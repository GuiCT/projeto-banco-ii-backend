const {Client} = require('pg');
const client = new Client({
  user: 'postgresadmin',
  host: 'localhost',
  database: 'postgres',
  password: 'postgresadmin',
  port: 5432,
});

client.connect();
export default client;