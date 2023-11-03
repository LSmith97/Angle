const express = require('express');
const router = express.Router();
const commentsCtl = require('../controllers/comments');

router.post('/', commentsCtl.create);
router.delete('/:id', commentsCtl.remove);
router.put('/:id', commentsCtl.update);

module.exports = router;