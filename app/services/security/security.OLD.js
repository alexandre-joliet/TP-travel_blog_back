const tokenBlog2 = require('./token');

const securityBlog2Service = {
  /**
   * Middleware de vérification si l'utilisateur est bien connecté !
   * @param {*} request 
   * @param {*} response 
   * @param {*} next 
   */
  isConnected (request, response, next ) {
    response.locals.user= tokenBlog2.decode(request);
    if ( !response.locals.user ) {
      console.log(request.url);
      // Personne non authentifiée !
      next( new Error ( "Vous devez obligatoirement être authentifiée pour être connectée !"));
    }
    else {
      next();
    }
  }
};

module.exports = securityBlog2Service;