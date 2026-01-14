const db = require('../config/db');

const Post = {
  create: (userId, content) =>
    db.query(
      'INSERT INTO posts(user_id, content) VALUES($1,$2) RETURNING *',
      [userId, content]
    ),

  findAll: () =>
    db.query(
      `SELECT p.*, u.username 
       FROM posts p 
       JOIN users u ON u.id = p.user_id
       ORDER BY p.created_at DESC`
    ),

  findById: id =>
    db.query('SELECT * FROM posts WHERE id=$1', [id]),

  update: (id, content) =>
    db.query(
      'UPDATE posts SET content=$2 WHERE id=$1 RETURNING *',
      [id, content]
    ),

  delete: id =>
    db.query('DELETE FROM posts WHERE id=$1')
};

module.exports = Post;