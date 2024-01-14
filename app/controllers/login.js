require("dotenv").config();
const loginDataMapper = require("../dataMapper/login");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginController = {

  async logUser (request, response, next) {
    const { mail, password } = request.body;

    const { error, foundUser } = await loginDataMapper.logUser(mail);
    
    // Si aucun utilisateur n'est trouvé
    if (!foundUser) {
      return response.status(401).json({"error": `Email ou mot de passe incorrect`});
    }
    
    // On vérifie que les deux passwords concordent
    const validPassword = bcrypt.compareSync(password, foundUser.password);

    if (!validPassword) {
      return response.status(401).json({"error": 'Email ou mot de passe incorrect'})
    }

    // On ne transmet pas le password au front
    foundUser.password = null;

    const userToken = jwt.sign({"userInfo": foundUser}, process.env.JWT_SECRET)

    request.session.user = foundUser;

    request.session.isConnected = true;

    if (error) {
      next(error);
    }
    // TODO: revoir durée cookie + signature ?
    else {
      response.cookie("token", userToken, {
        maxAge: 1000 * 60 * 2,
        httpOnly: true,
        // signed: true,
      })
      response.status(200).json({userToken, message: "Connexion réussie"});
    }

  }
}

module.exports = loginController;