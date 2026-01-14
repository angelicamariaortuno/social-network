const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const controller = require('../controllers/posts.controller.js');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', auth, controller.create);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.delete);

module.exports = router;