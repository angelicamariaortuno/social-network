const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const controller = require('../controllers/comment.controller.js');

router.get('/post/:postId', controller.getByPost);
router.post('/', auth, controller.create);
router.delete('/:id', auth, controller.delete);

module.exports = router;