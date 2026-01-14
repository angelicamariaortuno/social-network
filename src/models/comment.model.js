const db = require('../config/db');

const Comment = {
  create: (userId, postId, content) =>
    db.query(
      'INSERT INTO comments(user_id, post_id, content) VALUES($1,$2,$3) RETURNING *',
      [userId, postId, content]
    ),

  findByPost: postId =>
    db.query(
      'SELECT * FROM comments WHERE post_id=$1 ORDER BY created_at',
      [postId]
    ),

  delete: id =>
    db.query('DELETE FROM comments WHERE id=$1', [id])
};

module.exports = Comment;