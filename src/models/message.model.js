const db = require('../config/db');

const Message = {
  send: (senderId, receiverId, content) =>
    db.query(
      `INSERT INTO messages(sender_id, receiver_id, content)
       VALUES($1,$2,$3) RETURNING *`,
      [senderId, receiverId, content]
    ),

  getConversation: (user1, user2) =>
    db.query(
      `SELECT * FROM messages
       WHERE (sender_id=$1 AND receiver_id=$2)
       OR (sender_id=$2 AND receiver_id=$1)
       ORDER BY created_at`,
      [user1, user2]
    )
};

module.exports = Message;
