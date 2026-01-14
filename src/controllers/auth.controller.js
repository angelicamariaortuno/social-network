const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const result = await User.create(username, email, hash);
  res.status(201).json(result.rows[0]);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findByEmail(email);
  const user = result.rows[0];

  if (!user) return res.status(404).json({ message: 'Usuario no existe' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Credenciales inválidas' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });

  res.json({ token });
};