const express = require("express");
const router = express.Router();
const Controller = require("../controller/index");
const Authentication = require("../middlewares/authentication");

//login Register
router.post("/register", Controller.registerUser);
router.post("/login", Controller.loginUser);
//Product
router.get("/product", Authentication, Controller.showProduct);
router.get("/product/:id", Authentication, Controller.findProductId);
// router.get("/products", Authentication, Controller.findProductByCategory);
router.post("/product", Authentication, Controller.addProduct);
router.put("/product/:id", Authentication, Controller.editProduct);
router.delete("/product/:id", Authentication, Controller.deleteProduct);
//Category
router.get("/category", Authentication, Controller.showCategory);
router.get("/category/:id", Authentication, Controller.findCategoryId);
router.post("/category", Authentication, Controller.addCategory);
router.put("/category/:id", Authentication, Controller.editCategory);
router.delete("/category/:id", Authentication, Controller.deleteCategory);

module.exports = router;
