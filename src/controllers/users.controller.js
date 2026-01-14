const User = require('../models/User.model');

exports.getMe = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user.rows[0]);
};

exports.update = async (req, res) => {
  const { username, email } = req.body;
  const user = await User.update(req.user.id, username, email);
  res.json(user.rows[0]);
};

exports.delete = async (req, res) => {
  await User.delete(req.user.id);
  res.json({ message: 'Usuario eliminado' });
};