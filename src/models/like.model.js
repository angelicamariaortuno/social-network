const db = require('../config/db');

const Like = {
  add: (userId, postId) =>
    db.query(
      'INSERT INTO likes(user_id, post_id) VALUES($1,$2) ON CONFLICT DO NOTHING',
      [userId, postId]
    ),

  remove: (userId, postId) =>
    db.query(
      'DELETE FROM likes WHERE user_id=$1 AND post_id=$2',
      [userId, postId]
    )
};

module.exports = Like;