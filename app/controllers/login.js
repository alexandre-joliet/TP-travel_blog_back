require("dotenv").config();
const loginDataMapper = require("../dataMapper/login");
const sanitizeHTML = require("sanitize-html");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginController = {
  async logUser(request, response, next) {
    const { mail, password } = request.body;

    const cleanMail = sanitizeHTML(mail);
    const cleanPassword = sanitizeHTML(password);

    const { error, foundUser } = await loginDataMapper.logUser(cleanMail);

    // Si aucun utilisateur n'est trouvé
    if (!foundUser) {
      return response
        .status(401)
        .json({ error: `Email ou mot de passe incorrect` });
    }

    // On vérifie que les deux passwords concordent
    const validPassword = bcrypt.compareSync(cleanPassword, foundUser.password);

    if (!validPassword) {
      return response
        .status(401)
        .json({ error: "Email ou mot de passe incorrect" });
    }

    // On ne transmet pas le password au front
    foundUser.password = null;

    const userToken = jwt.sign({ userInfo: foundUser }, process.env.JWT_SECRET);

    request.session.user = foundUser;
    // console.log(request.session.user);

    request.session.isConnected = true;
    // console.log(request.session.isConnected);

    if (error) {
      next(error);
    }
    // TODO: revoir durée cookie + signature ?
    else {

      response.cookie("token", userToken, {
        // domain: 'api-travel-blog.onrender.com',
        maxAge: 1000 * 60 * 2,
        httpOnly: true,
        signed: true,
        secure: true,
        path: '/',
        sameSite: 'none',
      });
      response.status(200).json({ userToken, message: "Connexion réussie" });
    }
  },
};

module.exports = loginController;
