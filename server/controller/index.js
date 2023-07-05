const { User, Product, Category } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { Op, where } = require("sequelize");

class Controller {
  static async registerUser(req, res, next) {
    const { email, password } = req.body;
    try {
      if (!email) {
        throw { name: "BadRequest" };
      }
      if (!password) {
        throw { name: "BadRequest" };
      }
      const newUser = await User.create({
        email,
        password,
      });
      res.status(201).json({ newUser, message: "Register Success" });
    } catch (error) {
      next(error);
    }
  }

  static async loginUser(req, res, next) {
    const { email, password } = req.body;
    try {
      if (!email) {
        throw { name: "requiredEmail" };
      }
      if (!password) {
        throw { name: "requiredPassword" };
      }
      const findUser = await User.findOne({ where: { email } });
      if (!findUser) {
        throw { name: "Invalid Email" };
      }
      const isValidPassword = comparePassword(password, findUser.password);
      if (!isValidPassword) {
        throw { name: "Invalid password" };
      }
      const payload = {
        id: findUser.id,
      };
      const access_token = signToken(payload);
      res.status(200).json({ access_token, email });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async showProduct(req, res, next) {
    const { search, filter } = req.query;
    let options = {
      include: [
        {
          model: Category,
          attributes: ["name"],
          where: {},
        },
        {
          model: User,
          attributes: ["email"],
        },
      ],
    };

    if (search) {
      options.where = {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      };
    }

    if (filter) {
      options.include[0].where.name = {
        [Op.iLike]: `%${filter}%`,
      };
    }

    try {
      let products = await Product.findAll(options);

      res.status(200).json({ products });
    } catch (error) {
      next(error);
    }
  }
  // static async findProductByCategory(req, res, next) {
  //   const { search, filter } = req.query;
  //   let options = {
  //     include: {
  //       model: Product,
  //       where: {},
  //     },
  //   };
  //   if (search) {
  //     options.where = {
  //       name: {
  //         [Op.iLike]: `%${search}%`,
  //       },
  //     };
  //   }
  //   try {
  //     let categories = await Category.findAll(options);
  //     if (filter) {
  //       const filteredProducts = categories.filter((el) => {
  //         return el.Category.name === filter;
  //       });
  //       res.status(200).json({ filteredProducts });
  //     } else {
  //       res.status(200).json({ categories });
  //     }
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  static async addProduct(req, res, next) {
    let { name, description, imageUrl, stock, categoryId, authorId } = req.body;
    const userId = req.user.id;
    try {
      let newProduct = await Product.create({
        name,
        description,
        imageUrl,
        stock,
        categoryId,
        authorId: userId,
      });
      res.status(201).json({ product: { newProduct } });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async editProduct(req, res, next) {
    const productId = req.params.id;
    const { name, description, imageUrl, stock, categoryId, authorId } = req.body;
    try {
      const findProduct = await Product.findByPk(productId);
      if (!findProduct) {
        throw {
          name: "DataNotFound",
        };
      }
      findProduct.update({
        name,
        description,
        imageUrl,
        stock,
        categoryId,
        authorId,
      });
      res.status(200).json({
        product: findProduct,
        message: "Product Edited Successfully",
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    const productId = req.params.id;
    try {
      const findProduct = await Product.findByPk(productId);
      if (!findProduct) {
        throw {
          name: "DataNotFound",
        };
      }
      const deleted = await Product.destroy({ where: { id: productId } });
      res.status(200).json({ message: "Product Deleted Success" });
    } catch (error) {
      next(error);
    }
  }
  static async showCategory(req, res, next) {
    try {
      let category = await Category.findAll();
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async addCategory(req, res, next) {
    let { name } = req.body;
    try {
      let newCategory = await Category.create({ name });
      res.status(201).json({
        category: newCategory,
        message: "Add Category Successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async editCategory(req, res, next) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      await Category.update({ name }, { where: { id } });
      res.status(201).json({ message: "Category has been updated" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        throw { name: "DataNotFound" };
      }

      await Category.destroy({ where: { id } });
      res.status(200).json({ message: `${category.name} has been deleted` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
