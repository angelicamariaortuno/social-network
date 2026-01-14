const db = require('../config/db');

const User = {
  create: (username, email, password) =>
    db.query(
      `INSERT INTO users (username,email,password)
       VALUES ($1,$2,$3) RETURNING id, username, email`,
      [username, email, password]
    ),

  findByEmail: email =>
    db.query('SELECT * FROM users WHERE email=$1', [email]),

  findById: id =>
    db.query('SELECT id, username, email FROM users WHERE id=$1', [id]),

  update: (id, username, email) =>
    db.query(
      `UPDATE users SET username=$2, email=$3 WHERE id=$1 RETURNING *`,
      [id, username, email]
    ),

  delete: id =>
    db.query('DELETE FROM users WHERE id=$1')
};

module.exports = User;