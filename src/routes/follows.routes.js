const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const controller = require('../controllers/follows.controller.js');

router.post('/', auth, controller.follow);
router.delete('/:userId', auth, controller.unfollow);

module.exports = router;
