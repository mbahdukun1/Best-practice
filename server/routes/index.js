const express = require("express")
const router = express.Router()
const Controller = require("../controller/index")

router.post ("/register", Controller.registerUser)
router.post ("/login", Controller.loginUser)
router.get ("/product", Controller.showProduct)
router.post ("/product", Controller.addProduct)
router.put ("/product/:id", Controller.editProduct)
router.delete("/product/:id", Controller.deleteProduct)

module.exports = router