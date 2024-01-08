const userDataMapper = require("../dataMapper/user");

const userController = {

  async getAllUsers (request, response, next) {
    const { error, allUsers } = await userDataMapper.getAllUsers();

    if (error) {
      next(error);
    }
    else {
      response.json(allUsers);
    }
  }
}

module.exports = userController;