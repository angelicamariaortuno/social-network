const router = require('express').Router();
const auth = require('../middlewares/auth.middleware.js');
const controller = require('../controllers/profile.controller.js');

router.get('/', auth, controller.get);
router.post('/', auth, controller.createOrUpdate);

module.exports = router;