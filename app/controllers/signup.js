const signupDataMapper = require("../dataMapper/signup");
const userDataMapper = require("../dataMapper/user");
const sanitizeHTML = require("sanitize-html");
const bcrypt = require("bcrypt");

const signupController = {
  async createAccount(request, response, next) {
    const { last_name, first_name, avatar, mail, pseudo, password } =
      request.body;

    try {
      // On teste que tous les champs obligatoires ont été remplis
      if (!last_name || !first_name || !mail || !pseudo || !password) {
        return response
          .status(400)
          .json({
            error:
              "Merci de renseigner tous les champs obligatoires : Nom, Prénom, Mail, Pseudo et Mot de passe.",
          });
      }

      const cleanLastName = sanitizeHTML(last_name);
      const cleanFirstName = sanitizeHTML(first_name);
      const cleanAvatar = sanitizeHTML(avatar);
      const cleanMail = sanitizeHTML(mail);
      const cleanPseudo = sanitizeHTML(pseudo);
      const cleanPassword = sanitizeHTML(password);

      // On vérifie que l'adresse mail n'est pas déjà été utilisée par un autre utilisateur
      const existingMail = await userDataMapper.getOneUserFromMail(cleanMail);

      if (existingMail.userFound > 0) {
        return response
          .status(400)
          .json({
            error: `L'adresse mail renseignée est déjà utilisée par un autre utilisateur.`,
          });
      }

      // On vérifie que le pseudo n'est pas déjà utilisé par un autre utilisateur
      const existingPseudo = await userDataMapper.getOneUserFromPseudo(
        cleanPseudo
      );

      if (existingPseudo.userFound > 0) {
        return response
          .status(400)
          .json({
            error: `Le pseudo renseigné est déjà utilisé par un autre utilisateur.`,
          });
      }

      // On encrypte le mot de passe avec bcrypt
      const encryptedPassword = bcrypt.hashSync(cleanPassword, 10);

      const { error, newAccount } = await signupDataMapper.createAccount(
        cleanLastName,
        cleanFirstName,
        cleanAvatar,
        cleanMail,
        cleanPseudo,
        encryptedPassword
      );

      if (error) {
        next(error);
      } else {
        response.json(newAccount);
      }
    } catch (error) {
      console.log(error);
      response
        .status(500)
        .json({
          error:
            "Le serveur rencontre actuellement un problème. Veuillez nous en excuser.",
        });
    }
  },
};

module.exports = signupController;
