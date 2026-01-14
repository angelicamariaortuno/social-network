const Comment = require('../models/Comment.model');

exports.create = async (req, res) => {
  const comment = await Comment.create(
    req.user.id,
    req.body.postId,
    req.body.content
  );
  res.status(201).json(comment.rows[0]);
};

exports.getByPost = async (req, res) => {
  const comments = await Comment.findByPost(req.params.postId);
  res.json(comments.rows);
};

exports.delete = async (req, res) => {
  await Comment.delete(req.params.id);
  res.json({ message: 'Comentario eliminado' });
};