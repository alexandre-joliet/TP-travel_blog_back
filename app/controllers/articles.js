const articlesDatamapper = require('../dataMapper/articles');

const articlesController = {
  
  async getAllArticles ( request, response, next ) {
    const { error, allArticles } = await articlesDatamapper.findAll();

    if (error) {
      next(error);
    }
    else {
      response.json(allArticles);
    }
  }
};

module.exports = articlesController;
