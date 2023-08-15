const express = require("express");
const userRouter = express.Router(); // Initialize the router
const userController = require("../controller/users");

// Define your routes using the router instance
userRouter
  .post("/", userController.createUser )
  .get("/", userController.getAllUser )
  .get("/:id", userController.getUser )
  .put("/:id", userController.replaceUser )
  .patch("/:id", userController.updateUser )
  .delete("/:id", userController.deleteUser );

module.exports = userRouter; // Export the router instance
