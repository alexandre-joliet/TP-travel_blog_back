const favoritesDatamapper = require('../dataMapper/favorites');

const favoritesController = {

  /**
   * Afficher ses articles favorisés !
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async getAllFavorites(req, res, next) {
    console.log('Favorite controller', req.params);
    const { error, allFavorites } = await favoritesDatamapper.getAllFavorites(req.params.id);
    if (error) {
      next(error);
    } else {
      res.json(allFavorites);
    }
  },
  
  /**
   * Ajout d'un article en favoris
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async addFavorites(req, res, next ) {
    const values = req.body;
    console.log('Controller add favorite values', values);
    const { error, addFavorite } = await favoritesDatamapper.addFavorites( values);
    console.log('Controller addFavorite', addFavorite);
    if ( error ) {
      next( error );
    }else{
      res.json( addFavorite )
    }
  },

  /**
   * Suppression d'un favoris à un article favorisé !
   * @param {*} request 
   * @param {*} response 
   * @param {*} next 
   */
  async deleteFavorite( request, response, next ) {
    console.log('Deleting a favorite controller ', request.params);
    const { error, result } = await favoritesDatamapper.deleteFavorite( request.params.id );
    let message = "Your favorite article has been deleted controller ! ";
    if ( error ) {
      // J'en ai une erreur alors !
      message = "You don't have this type of favorites to detete controller !";
      response.status(500).json( message );
    }
    else {
      response.json( { message, result });
    }
  }
};

module.exports= favoritesController;