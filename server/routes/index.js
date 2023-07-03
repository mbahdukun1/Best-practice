const express = require("express");
const router = express.Router();
const Controller = require("../controller/index");
const Authentication = require("../middlewares/authentication");

router.post("/register", Controller.registerUser);
router.post("/login", Controller.loginUser);
router.get("/product", Authentication, Controller.showProduct);
// router.get("/products", Authentication, Controller.findProductByCategory);
router.post("/product", Authentication, Controller.addProduct);
router.put("/product/:id", Authentication, Controller.editProduct);
router.delete("/product/:id", Authentication, Controller.deleteProduct);
router.get("/category", Controller.showCategory);

module.exports = router;
