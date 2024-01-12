const userDataMapper = require("../dataMapper/user");
const bcrypt = require('bcrypt');

const accountController = {
  
  async showUserInfo (request, response, next) {
    console.log(request.session);

    if (!request.session.isConnected) {
      return response.status(401).json({message: "Utilisateur non connecté"})
    }

    const user = request.session.user;

    response.json(user);

  },

  async deleteUserAccount (request, response, next) {
    const { id } = request.params;

    const { error, deletedUser } = await userDataMapper.deleteUser(id);

    if (error) {
      next(error);
    }
    else {
      response.json(deletedUser);
    }
  },

  async updateUserLastName (request, response, next) {
    const { id } = request.params;
    const { lastName } = request.body;

    const { error, updatedLastName } = await userDataMapper.updateUserLastName(id, lastName);

    if (error) {
      next(error);
    }
    else {
      response.json(updatedLastName);
    }
  },

  async updateUserFirstName (request, response, next) {
    const { id } = request.params;
    const { firstName } = request.body;

    const { error, updatedFirstName } = await userDataMapper.updateUserFirstName(id, firstName);

    if (error) {
      next(error);
    }
    else {
      response.json(updatedFirstName);
    }
  },

  async updateUserMail (request, response, next) {
    const { id } = request.params;
    const { mail } = request.body;

    // On vérifie que l'adresse mail n'est pas déjà été utilisée par un autre utilisateur
    const existingMail = await userDataMapper.getOneUserFromMail(mail);

    if (existingMail.userFound > 0) {
      return response.status(400).json({error: `L'adresse mail renseignée est déjà utilisée par un autre utilisateur.`})
    }

    const { error, updatedMail } = await userDataMapper.updateUserMail(id, mail);

    if (error) {
      next(error);
    }
    else {
      response.json(updatedMail);
    }
  },

  async updateUserPseudo (request, response, next) {
    const { id } = request.params;
    const { pseudo } = request.body;

    // On vérifie que le pseudo n'est pas déjà utilisé par un autre utilisateur
    const existingPseudo = await userDataMapper.getOneUserFromPseudo(pseudo);

    if (existingPseudo.userFound > 0) {
      return response.status(400).json({error: `Le pseudo renseigné est déjà utilisé par un autre utilisateur.`})
    }

    const { error, updatedPseudo } = await userDataMapper.updateUserPseudo(id, pseudo);

    if (error) {
      next(error);
    }
    else {
      response.json(updatedPseudo);
    }
  },

  async updateUserPassword (request, response, next) {
    const { id } = request.params;
    const { password } = request.body;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const { error, updatedPseudo } = await userDataMapper.updateUserPassword(id, encryptedPassword);

    if (error) {
      next(error);
    }
    else {
      response.json(updatedPseudo);
    }
  },

}

module.exports = accountController;