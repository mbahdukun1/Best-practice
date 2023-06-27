const {User, Product} = require('../models')
const {comparePassword} = require("../helpers/bcrypt")
const {signToken} = require("../helpers/jwt")
const {Op} = require("sequelize")

class Controller {
    static async registerUser(req,res) {
        const {email,password} = req.body
        try {
            const newUser = await (User.create({
                email,
                password
            }))
            res.status(201).json({newUser, message: "Register Success"})
        } catch (error) {
            console.log(error);
            res.status(500).json("Internal Server Error")
        }
    }
    static async loginUser(req,res) {
        const {email,password} = req.body
        try {
            if (!email) {
                throw {
                    name: "InvalidLogin",
                    code: 400,
                    message: "Email is required"
                }
            }
            if (!password) {
                throw {
                    name: "InvalidLogin",
                    code: 400,
                    message: "Password is required"
                }
            }
            const user = await User.findOne({where: {email}})
            if (!user) {
                throw {
                    name:"notFound", 
                    code: "404",
                    message: "user not found"
                }
            }
          const isValidPassword = comparePassword(password,user.password)
          if (!isValidPassword) {
            throw {
                name: "InvalidLogin", 
                code: 400,
                message: "Invalid Password"
            }
          }
          const access_token = signToken({id: user.id})
          res.status(200).json({access_token})

        } catch (error) {
            console.log(error)
            res.status(500).json("Internal Server Error")
        }
    }
    static async showProduct(req,res) {
        try {
            let product = await Product.findAll()
            res.status(200).json(product)

        } catch (error) {
            console.log(error);
            res.status(500).json("Internal Server Error")
        }
    }
    static async addProduct(req,res) {
        let {name, description,imageUrl} = req.body
        try {
            let newProduct = await Product.create ({
                name,
                description,
                imageUrl
            })
            res.status(201).json({product: {newProduct}})
        } catch (error) {
            console.log(error);
            res.status(500).json("Internal Server Error")
        }
    }
    static async editProduct (req,res) {
        const productId = req.params.id
        const {name, description,imageUrl} = req.body
        try {
            const findProduct = await Product.findByPk(productId)
            if (!findProduct) {
                throw {
                name : "productNotFound",
                code: 400,
                message: "Product Not Found"
                }
            }
            findProduct.update({
                name, description,imageUrl
            })
            res.status(200).json({
                product : findProduct,
                message: "Product Edited Successfully"
            })

        } catch (error) {
            console.log(error);
            res.status(500).json("Internal Server Error")
        }
    }
    static async deleteProduct (req,res) {
        const productId = req.params.id
        try {
            const findProduct = await Product.findByPk(productId)
            if (!findProduct) {
                throw {
                name : "productNotFound",
                code: 400,
                message: "Product Not Found"
                }
            }
            const deleted = await Product.destroy({where: {id: productId}})
            res.status(200).json({message: "Product Deleted Success"})
        } catch (error) {
            console.log(error);
            res.status(500).json("Internal Server Error")
        }
    }
}

module.exports = Controller