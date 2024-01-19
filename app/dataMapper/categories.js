const Category = require('../models/Category');
const client = require('../services/database');

const categeoriesDatamapper = {

  async getllCategories () {
    const sqlQuery = {
      text: 'SELECT * FROM "category"'
    } 

    let allCategories = [];
    let error;

    try {
      const results = await client.query(sqlQuery);
      
      results.rows.forEach((category) => {
        const foundCategory = new Category(category);
        allCategories.push(foundCategory);
      })
      
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