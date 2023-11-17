const express = require("express");
const postController = require("../controllers/postController");

const blogRouter = express.Router();

blogRouter.get("/", postController.getPosts);
blogRouter.post("/", postController.createPost);
blogRouter.get("/:id", postController.getPosts);
blogRouter.delete("/:id", postController.deletePost);
blogRouter.put("/:id", postController.updatePost);

module.exports = blogRouter;
