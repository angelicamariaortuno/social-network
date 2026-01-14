const Post = require('../models/Post.model');

exports.create = async (req, res) => {
  const post = await Post.create(req.user.id, req.body.content);
  res.status(201).json(post.rows[0]);
};

exports.getAll = async (_, res) => {
  const posts = await Post.findAll();
  res.json(posts.rows);
};

exports.getById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post.rows[0]);
};

exports.update = async (req, res) => {
  const post = await Post.update(req.params.id, req.body.content);
  res.json(post.rows[0]);
};

exports.delete = async (req, res) => {
  await Post.delete(req.params.id);
  res.json({ message: 'Post eliminado' });
};