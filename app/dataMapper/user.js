const client = require("../services/database");
const User = require("../models/User");

const userDataMapper = {
  
  async getAllUsers() {
    const sqlQuery = 'SELECT * FROM "user" ORDER BY "id" ASC';

    let allUsers = [];
    let error;

    try {
      const results = await client.query(sqlQuery);

      results.rows.forEach((user) => {
        const foundUser = new User(user);
        allUsers.push(foundUser);
      });
    } catch (err) {
      error = err;
    }

    return { error, allUsers };
  },

  async getOneUserFromMail(cleanMail) {
    const sqlQuery = {
      text: 'SELECT * FROM "user" WHERE "mail" = $1',
      values: [cleanMail],
    };

    let error;
    let userFound;

    try {
      const results = await client.query(sqlQuery);
      userFound = results.rowCount;
    } catch (err) {
      error = err;
    }
    return { error, userFound };
  },

  async getOneUserFromPseudo(cleanPseudo) {
    const sqlQuery = {
      text: 'SELECT * FROM "user" WHERE "pseudo" = $1',
      values: [cleanPseudo],
    };

    let error;
    let userFound;

    try {
      const results = await client.query(sqlQuery);
      userFound = results.rowCount;
    } catch (err) {
      error = err;
    }
    return { error, userFound };
  },

  async getOneUserFromId(id) {
    const sqlQuery = {
      text: 'SELECT * FROM "user" WHERE "id" = $1',
      values: [id],
    };

    let error;
    let userFound;

    try {
      const results = await client.query(sqlQuery);
      userFound = results.rows[0];
    } catch (err) {
      error = err;
    }
    return { error, userFound };
  },

  async deleteUser(id) {
    const sqlQuery = {
      text: 'DELETE FROM "user" WHERE id = $1',
      values: [id],
    };

    let error;
    let deletedUser;

    try {
      const results = await client.query(sqlQuery);
      deletedUser = results.rowCount;
    } catch (err) {
      error = err;
    }
    return { error, deletedUser };
  },

  async updateUserLastName(id, lastName) {
    const sqlQuery = {
      text: 'UPDATE "user" SET last_name = $2 WHERE id = $1',
      values: [id, lastName],
    };

    let error;
    let updatedLastName;

    try {
      const results = await client.query(sqlQuery);
      updatedLastName = results.rowCount;
    } catch (err) {
      error = err;
    }
    return { error, updatedLastName };
  },

  async updateUserFirstName(id, firstName) {
    const sqlQuery = {
      text: 'UPDATE "user" SET first_name = $2 WHERE id = $1',
      values: [id, firstName],
    };

    let error;
    let updatedFirstName;

    try {
      const results = await client.query(sqlQuery);
      updatedFirstName = results.rowCount;
    } catch (err) {
      error = err;
    }
    return { error, updatedFirstName };
  },

  async updateUserMail(id, mail) {
    const sqlQuery = {
      text: 'UPDATE "user" SET mail = $2 WHERE id = $1',
      values: [id, mail],
    };

    let error;
    let updatedMail;

    try {
      const results = await client.query(sqlQuery);
      updatedMail = results.rowCount;
    } catch (err) {
      error = err;
    }
    return { error, updatedMail };
  },

  async updateUserPseudo(id, pseudo) {
    const sqlQuery = {
      text: 'UPDATE "user" SET pseudo = $2 WHERE id = $1',
      values: [id, pseudo],
    };

    let error;
    let updatedPseudo;

    try {
      const results = await client.query(sqlQuery);
      updatedPseudo = results.rowCount;
    } catch (err) {
      error = err;
    }
    return { error, updatedPseudo };
  },

  async updateUserPassword(id, encryptedPassword) {
    const sqlQuery = {
      text: 'UPDATE "user" SET password = $2 WHERE id = $1',
      values: [id, encryptedPassword],
    };

    let error;
    let updatedPassword;

    try {
      const results = await client.query(sqlQuery);
      updatedPassword = results.rowCount;
    } catch (err) {
      error = err;
    }
    return { error, updatedPassword };
  },
};

module.exports = userDataMapper;
