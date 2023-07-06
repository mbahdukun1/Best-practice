"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
      Product.belongsTo(models.User, {
        foreignKey: "authorId",
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: "Name Cannot Be Null",
          },
          notEmpty: {
            message: "Name Cannot Be Empty",
          },
        },
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: "Description Cannot Be Null",
          },
          notEmpty: {
            message: "Description Cannot Be Empty",
          },
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            message: "Image Url Cannot Be Null",
          },
          notEmpty: {
            message: "Image Url Cannot Be Empty",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            message: "Stock Cannot Be Null",
          },
          notEmpty: {
            message: "Stock Cannot Be Empty",
          },
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            message: "Category ID Cannot Be Null",
          },
          notEmpty: {
            message: "Category ID Cannot Be Empty",
          },
        },
      },
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
