const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    let { access_token } = req.headers;
    if (!access_token) {
      throw { name: "AccessTokenMissing" };
    }

    let payload = verifyToken(access_token);
    let { id } = payload;

    let user = await User.findByPk(id);
    if (!user) {
      throw { name: "InvalidToken" };
    }

    req.user = {
      id: user.id,
      name: user.name,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
