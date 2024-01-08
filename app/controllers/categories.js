const categeoriesDatamapper = require("../dataMapper/categories");

const categoriesController = {
  async getAllCategories (request, response, next) {
    const { error, allCategories } = await categeoriesDatamapper.getllCategories();
  
    if (error) {
      next(error);
    }
    else {
      response.json(allCategories);
    }
  }
}


module.exports = categoriesController;