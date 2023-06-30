const errorHandler = (error, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error";
  console.log(error.name);

  switch (error.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = error.errors[0].message;
      break;
    case "BadRequest":
      status = 400;
      message = "Entitas Is required";
      break;
    case "Invalid Email/password":
      status = 401;
      message = "Email / Password Invalid";
      break;
    case "requiredEmail":
      status = 400;
      message = "Email Is Required";
      break;
    case "requiredPassword":
      status = 400;
      message = "Password Is Required";
      break;
    case "badRequest":
      status = 400;
      message = "Inpus Is Required";
      break;
    case "AccessTokenMissing":
      status = 400;
      message = "access_token is headers is required";
      break;
    case "JsonWebTokenError":
    case "InvalidToken":
      status = 401;
      message = "Invalid Token";
      break;
    case "Forbidden":
      status = 401;
      message = "Forbidden";
      break;
    case "DataNotFound":
      status = 404;
      message = "Data Not Found";
      break;
    case "Unauthorized":
      status = 401;
      message = "Email and Password Is Wrong";
      break;
  }
  res.status(status).json({ message });
};
module.exports = errorHandler;
