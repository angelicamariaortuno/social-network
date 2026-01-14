const Like = require('../models/Like.model');

exports.add = async (req, res) => {
  await Like.add(req.user.id, req.body.postId);
  res.json({ message: 'Like agregado' });
};

exports.remove = async (req, res) => {
  await Like.remove(req.user.id, req.params.postId);
  res.json({ message: 'Like eliminado' });
};