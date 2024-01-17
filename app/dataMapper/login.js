const client = require('../services/database');

const loginDataMapper = {
  
  async logUser (mail) {
    const sqlQuery = {
      text: 'SELECT "user".last_name, "user".first_name, "user".avatar, "user".mail, "user".pseudo, "user".password, "role".label FROM "user" JOIN "role" ON "user".role_id = role.id WHERE "user".mail = $1',
      values: [mail]
    }

    let error;
    let foundUser;

    try {
      const results = await client.query(sqlQuery);
      foundUser = results.rows[0];
    } 
    catch (err) {
      error = err;
    }
    return { error, foundUser }
  }
}


module.exports = loginDataMapper;