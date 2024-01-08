const client = require('../services/database');

const favoritesDatamapper = {
  /**
   * Affichage de tous les articles favorisées
   * @param {*} userId 
   * @returns 
   */
  async getAllFavorites (userId) {
    console.log('userId Datamapper', userId);
    const sqlQuery = {
      text: 'SELECT * FROM "user_has_favorites" WHERE user_id=$1',
    }
    let values= [userId];
    let allFavorites;
    let error;

    try {
      const result = await client.query( sqlQuery );
      allFavorites = result.rows;
      console.log('This allFavorites', allFavorites);
      // Dans le cas ou l'id du favoris n'est pas défini !
      if ( allFavorites === undefined ) {
        throw new Error('Aucune favories existantes n\'a été trouvée à cet Id !')
      }
    } catch ( err ) {
      error = err;
    }
    // Je retourne les informations au controller !
    return { error,  allFavorites };
  },
  /**
   * Ajout d'un article en favoris !
   * @param {*} value 
   * @returns 
   */
  async addFavorites( value ) {
    const sqlQuery = {
      text: 'INSERT INTO user_has_favorites ("article_id", "user_id") VALUES ($1, $2) RETURNING *',
      values: [ value.article_id, value.user_id ]
    }
    let addFavorite
    let error
    try {
      const result = await client.query( sqlQuery );
      console.log("est-ce que je recois un résultat datamapper ?", result.rows[0]);
      addFavorite = result.rows[0];
      console.log('So this is my favorite article datamapper !', addFavorite);
    } catch ( err ) {
      error = err;
    }

    return { error, addFavorite }
  },
  /**
   * Suppresion d'un favoris a partir de son id 
   * @param {*} id 
   * @returns 
   */
  async deleteFavorite ( id ) {
    console.log(`L'id du favoris de l'article supprimé datamapper est `, id );
    const result = [ id ];
    // On verifie que l'id du favoris l'appartient !
    // Et n'as pas un autre article rattaché avec cet id !

    const verifyQuery="SELECT * FROM user_has_favorites WHERE article_id=$1";
    try {
      const favorite_response = await client.query( verifyQuery, result );
      console.log('Est-ce que je recoios depuis le user_has_favorites datamapper ', favorite_response.rows[ 0 ]);
      // S'il existe un article rattaché à cela alors ! 
      if ( favorite_response.rows[0] =! undefined ) {
        // On le supprime de l'entrée du user_has_favorites
        console.log('I want to delete the entry in the Id is datamapper ', favorite_response.rows[0].id);
        const deleteQuery="DELETE FROM user_has_favorites WHERE id=$1 RETURNING *";
        const user_has_favoritesResult = [ favorite_response.rows[0].id ];
        try {
          const responseDelete = await client.query(deleteQuery, user_has_favoritesResult.rows[0]);
          console.log('Respoonse de la suppression datamapper ', responseDelete);
        } catch (err) {
          console.log('I have to this error datamapper !', err);
        }
      }
    } catch (err) {
      console.log('Err', err);
    }

    // Dans le cas où s'il n'exite pas on vient de le supprimer on peut aussi alors le supprimer !
    const sqlQuery="DELETE FROM user_has_favorites WHERE id=$1 RETURNING *";
    let error;
    let favorite;
    try {
      const response = await client.query(sqlQuery, result);
      favorite = response.rows[0];
      console.log(`Je renvoie le favoris supprimer datamapper`, favorite);
      //Si favoris === non definie :!
      if ( favorite === undefined ) {
        throw new Error ( ` Il n'existe ce type de favoris souhaité pour sa suppresssion !`);
      }
    } catch (err) {
      error = err;
    }
    return { error, favorite };
  }
};

module.exports = favoritesDatamapper;