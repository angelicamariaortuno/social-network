const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const controller = require('../controllers/messages.controller.js');

router.post('/', auth, controller.send);
router.get('/:userId', auth, controller.getConversation);

module.exports = router;
