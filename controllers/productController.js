import db from "../models/index.js";

// create main model
const Product = db.products;
const Review = db.reviews;

// main work
export const addProduct = async (req, res) => {
   let info = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
   };

   const product = await Product.create(info);
   res.status(201).json(product);
};

export const getAllProducts = async (req, res) => {
   let products = await Product.findAll({});
   res.status(200).json(products);
};

export const getSingleProduct = async (req, res) => {
   let id = req.params.id;
   let product = await Product.findOne({ where: { id: id } });
   res.status(200).json(product);
};

export const updateProduct = async (req, res) => {
   let id = req.params.id;
   const product = await Product.update(req.body, { where: { id: id } });
   res.status(200).json('product updated successfully');
};

export const deleteProduct = async (req, res) => {
   let id = req.params.id;
   await Product.destroy({ where: { id: id } });
   res.status(200).json("Product deleted successfully");
};

export const getPublishedProduct = async (req, res) => {
   const products = await Product.findAll({ where: { published: true } });
   return res.status(200).json(products);
};

