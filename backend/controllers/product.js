const Product = require("../models/product");

const registerProduct = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.price ||
    !req.body.code
  )
    return res.status(401).send("Process failed: Incomplete data");

  const existingCode = await Product.findOne({ code: req.body.code });
  if (existingCode)
    return res.status(401).send("Process failed: code already exist");

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    code: req.body.code,
    description: req.body.description,
    dbStatus: true,
  });

  const result = await product.save();
  if (!result) return res.status(401).send("Failed to register product");
  return res.status(200).send({ product });
};

const listProduct = async (req, res) => {
  const product = await Product.find();
  if (!product) return res.status(401).send("No products");
  return res.status(200).send({ product });
};

module.exports = { registerProduct, listProduct };
