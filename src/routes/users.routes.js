const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const controller = require('../controllers/users.controller.js');

router.get('/me', auth, controller.getMe);
router.put('/me', auth, controller.update);
router.delete('/me', auth, controller.delete);

module.exports = router;