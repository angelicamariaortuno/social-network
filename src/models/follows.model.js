const db = require('../config/db');

const Follow = {
  follow: (followerId, followingId) =>
    db.query(
      'INSERT INTO follows(follower_id, following_id) VALUES($1,$2) ON CONFLICT DO NOTHING',
      [followerId, followingId]
    ),

  unfollow: (followerId, followingId) =>
    db.query(
      'DELETE FROM follows WHERE follower_id=$1 AND following_id=$2',
      [followerId, followingId]
    )
};

module.exports = Follow;