const articlesDatamapper = require('../dataMapper/articles');

const articlesController = {
  async getAllArticles ( _, response, next ) {
    // On récupère tous les articles de la BDD
    console.log('je suis dans le controller');
    const { error, articles } = await articlesDatamapper.findAll();

    if (error) {
      // J'ai une erreur donc 
      next(error);
    }
    else {
      // Je retourne tous les articles
      response.json(articles);
    }
  }
};

module.exports = articlesController;
