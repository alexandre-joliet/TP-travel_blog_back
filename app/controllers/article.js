const articleDatamapper = require('../dataMapper/article');
const articleController = {

  /**
   * 
   * Récupération de chaque article
   */
  async getOneArticle ( req, res, next ) {
    const { id } = req.params;
    const { error, article } = await articleDatamapper.getOne(id);
    console.log('article', article);
    if ( error ) {
      next ( error );
    }
    else {
      res.json( article );
    }
    
  },

  /**
   * Récupération des informations liées à un article
   */
  async updateArticle ( req, res, next ) {
    // updateArticle retournera l'article modifié en BDD
    console.log(`Dans mon body j'ai `, req.body);
    const { error, result } = await articleDatamapper.updateArticle(req.params.id, req.body);

    if ( error ) {
      // J'ai une erreur !
      next ( error );
    }
    else {
      // On retourne l'article mis à jour !
      res.json( result );
    }
  },

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