const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const controller = require('../controllers/favorites.controller.js');

router.post('/', auth, controller.add);
router.delete('/:postId', auth, controller.remove);

module.exports = router;