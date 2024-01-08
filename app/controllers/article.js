const articleDatamapper = require('../dataMapper/article');
const articleController = {

  async getOneArticle ( request, response, next ) {
    const { id } = request.params;
    const { error, oneArticle } = await articleDatamapper.getOneArticle(id);

    if ( error ) {
      next ( error );
    }
    else {
      response.json( oneArticle );
    }
    
  },

  async updateArticle ( request, response, next ) {
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
  /**
   * Suppression d'un article
   */
  async deleteArticle ( req, res, next ) {
    const { error, article } = await articleDatamapper.deleteArticle(req.params.id);
    let message ="article a été bien supprimé";
    if ( error ) {
      // J'ai une erreur !
      message = "Il n'y a pas ce type d'article sous cet id a supprimé";
      res.status(500).json( message );
    }
    else {
      // On retourne l'article si l'article a été bien supprimé  sinon on retourne l'erreur !
      res.json( { message , article} );
    }
  },
};

module.exports = articleController;