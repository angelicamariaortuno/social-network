const Favorite = require('../models/Favorite.model');

exports.add = async (req, res) => {
  await Favorite.add(req.user.id, req.body.postId);
  res.json({ message: 'Favorito agregado' });
};

exports.remove = async (req, res) => {
  await Favorite.remove(req.user.id, req.params.postId);
  res.json({ message: 'Favorito eliminado' });
};