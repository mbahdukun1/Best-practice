const bcrypt = require("bcryptjs")

const hashPassword = (password) => bcrypt.hashSync(password, 5)
const comparePassword = (password, passwordHash) => bcrypt.compareSync(password, passwordHash)

module.exports = {hashPassword, comparePassword}