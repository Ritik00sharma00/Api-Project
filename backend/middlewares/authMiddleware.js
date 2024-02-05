const { generateJWT, verifyJWT } = require("../utils/Auth.js");

const { serverConfig } = require("../config/config.js");

const authenticate = (req, res, next) => {
const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication token is required" });
  }

  try {
  verifyJWT(token, serverConfig.jwtSecret);
    
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid authentication token" });
  }
};

module.exports =  authenticate ;
