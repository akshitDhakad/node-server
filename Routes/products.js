const express = require("express");
const productRouter = express.Router(); // Initialize the router
const productController = require("../controller/products");

// Define your routes using the router instance
productRouter
  .post("/", productController.createProducts)
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

module.exports = productRouter; // Export the router instance
