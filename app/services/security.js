const jwt = require("jsonwebtoken");

const security = {
  isConnected: (request, response, next) => {

  },
  
  
  checkToken: (request, response, next) => {
    if (
      request.headers.authorization &&
      request.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      try {
        // console.log(request.headers)
        const token = request.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET);
        next();
      } catch (error) {
        console.log(error);
        next(error);
      }
    }
  },

  checkTokenIsAdmin: (request, response, next) => {
    if (
      request.headers.authorization &&
      request.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      try {
        const token = request.headers.authorization.split(" ")[1];
        const result = jwt.verify(token, process.env.JWT_SECRET);
        if (result.userInfo.label != "Admin") {
          throw Error("Seul un Admin peut réaliser cette action");
        }
        next();
      } catch (error) {
        console.log(error);
        next(error);
      }
    }
  }
};

module.exports = security;
