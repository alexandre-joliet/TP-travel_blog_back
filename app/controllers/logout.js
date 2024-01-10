const logoutController = {

  logoutUser (request, response, next) {
    request.session.destroy();
    console.log(request.session);
    
    response.clearCookie("connect.sid");

    response.status(200).json({message: "Déconnexion réussie"})
  }
}

module.exports = logoutController;