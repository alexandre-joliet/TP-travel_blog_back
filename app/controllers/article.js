const articleDatamapper = require('../dataMapper/article');
const sanitizeHTML = require('sanitize-html');

const articleController = {

  async getOneArticle (request, response, next) {
    const { id } = request.params;
    const { error, oneArticle } = await articleDatamapper.getOneArticle(id);

    if ( error ) {
      next ( error );
    }
    else {
      response.json( oneArticle );
    }
  },

  async createArticle (request, response, next) {
    const { title, description, content, image, category } = request.body;

    try {
      // On teste que tous les champs obligatoires ont été remplis
      if (!title || !description || !content || !category) {
        return response.status(400).json({error: 'Merci de renseigner tous les champs obligatoires : Titre, Description, Contenu et Catégorie.'})
      }

      // On clean les données provenant du texte HTML provenant du front
      const cleanContentHTML = sanitizeHTML(content);

      const { error, createdArticle } = await articleDatamapper.createArticle(title, description, cleanContentHTML, image, category);

      if ( error ) {
        next ( error );
      }
      else {
        response.json( createdArticle );
      }

    } catch (error) {
      console.log(error);
      response.status(500).json({error: 'Le serveur rencontre actuellement un problème. Veuillez nous en excuser.'});
    }
  },

  async updateArticle (request, response, next) {
    const { id } = request.params;
    const { body } = request.body;
    const { error, updatedArticle } = await articleDatamapper.updateOneArticle(id, body);

    if ( error ) {
      next ( error );
    }
    else {
      response.json(updatedArticle);
    }
  },

  
  // TODO: A REFACTORISER
  async deleteArticle (request, response, next) {
    const { id } = request.params;
    const { error, article } = await articleDatamapper.deleteArticle(id);

    if ( error ) {
      response.status(500).json({Error: error });
    }
    else {
      response.json(article);
    }
  },
};

module.exports = articleController;