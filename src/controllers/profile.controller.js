const Profile = require('../models/Profile.model');

exports.get = async (req, res) => {
  const profile = await Profile.getByUser(req.user.id);
  res.json(profile.rows[0]);
};

exports.createOrUpdate = async (req, res) => {
  const { bio, avatar } = req.body;
  const profile = await Profile.upsert(req.user.id, bio, avatar);
  res.json(profile.rows[0]);
};
