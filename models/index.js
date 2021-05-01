// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

// Products belongToMany Tags (through ProductTag) CHECK THIS
Product.belongsToMany(Tag, {
  through: { model: ProductTag, unqiue: false },
  // as: "product_tag",
});

// Tags belongToMany Products (through ProductTag) CHECK THIS
Tag.belongsToMany(Product, {
  // through: { model: ProductTag, unqiue: false },
  through: ProductTag,
  // as: "product_tag",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
