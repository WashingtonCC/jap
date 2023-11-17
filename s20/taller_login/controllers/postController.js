const postModel = require("../models/postModel");

const getPosts = async (req, res) => {
  const posts = await postModel.getPosts(req.params.id);
  if (posts) {
    res.status(200).json(posts);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
};

const createPost = async (req, res) => {
  // Here, I could check the post first to find out whether it's a 404 or a 400
  const post = await postModel.createPost(req.body);
  if (post) {
    res.status(201).json(post);
  } else {
    res.status(500).json({ message: "An error occurred" });
  }
};

const deletePost = async (req, res) => {
  const response = await postModel.deletePost(req.params.id);
  if (response) {
    res.status(204).json({});
  } else {
    res.status(400).json({ message: "Post not found" });
  }
};

const updatePost = async (req, res) => {
  // Here, I could check the post first to find out whether it's a 404 or a 400
  const post = await postModel.updatePost(req.params.id, req.body);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = {
  getPosts,
  createPost,
  deletePost,
  updatePost,
};
