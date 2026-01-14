const Message = require('../models/Message.model');

exports.send = async (req, res) => {
  const msg = await Message.send(
    req.user.id,
    req.body.receiverId,
    req.body.content
  );
  res.status(201).json(msg.rows[0]);
};

exports.getConversation = async (req, res) => {
  const messages = await Message.getConversation(
    req.user.id,
    req.params.userId
  );
  res.json(messages.rows);
};