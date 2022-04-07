const jsonwebtoken = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jsonwebtoken.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId != userId) {
      throw "User Id Not Valid !";
    } else {
      req.auth = { userId };
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error | "Request Non Authorized " });
  }
};
