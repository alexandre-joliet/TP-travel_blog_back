const client = require('../services/database');

const categeoriesDatamapper = {

  async getllCategories () {
    const sqlQuery = {
      text: 'SELECT * FROM "category"'
    } 

    let allCategories;
    let error;

    try {
      const result = await client.query(sqlQuery);
      allCategories = result.rows;
      // console.log(allCategories);
      
      if(!allCategories) {
        throw new Error(`Aucune catégorie n'a été trouvée !`)
      }
    } 
    catch (err) {
      error = err;
    }

    return { error, allCategories };
  }
}

module.exports = categeoriesDatamapper;