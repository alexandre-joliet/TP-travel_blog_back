const client = require('../services/database')

const signupDataMapper = {

  async createAccount (last_name, first_name, avatar, mail, pseudo, encryptedPassword) {
    const sqlQuery = {
      text: 'INSERT INTO "user" ("last_name", "first_name", "avatar", "mail", "pseudo", "password", "role_id") VALUES ($1, $2, $3, $4, $5, $6, $7)',
      values: [last_name, first_name, avatar, mail, pseudo, encryptedPassword, 2]
    }

    let newAccount;
    let error;

    try {
      const result = await client.query(sqlQuery);
      newAccount = result.rows[0]; 
    } 
    catch (err) {
      error = err;
    }
    return { error, newAccount }
  }
}


module.exports = signupDataMapper;