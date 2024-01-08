const jwt = require('jsonwebtoken');

const tokenBlog2 = {
  /**
   * Génération d'un token 
   * @param {*} data nos données à afficher !
   * @returns 
   */
  get( data ) {
    return jwt.sign( data, process.env.JWT_SECRET );
  },
  /**
   * Déchiffrement du token 
   * @param {*} request la requête obtenue 
   * @returns 
   */
  decode( request ) {
    if ( request.headers.authorization && request.headers.authorization.split(' ')[0] === 'Bearer') {
      const token = request.headers.authorization.split(' ')[ 1 ];
      try {
        return jwt.verify( token, process.env.JWT_SECRET);
      } catch (error) {
        return null;
      }
    }
  }
};

module.exports = tokenBlog2;