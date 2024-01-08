require('dotenv').config();
const pg = require('pg');

// création d'un client
const client = new pg.Client(process.env.PG_URL);
// connection du client
client.connect().then(console.log("Connected to the DB! ")).catch((error) => console.log(error));

module.exports = client;