const Follow = require('../models/Follows.model');

exports.follow = async (req, res) => {
  await Follow.follow(req.user.id, req.body.userId);
  res.json({ message: 'Usuario seguido' });
};

exports.unfollow = async (req, res) => {
  await Follow.unfollow(req.user.id, req.params.userId);
  res.json({ message: 'Usuario dejado de seguir' });
};