const express = require('express');
const router = express.Router();
const commentsCtl = require('../controllers/comments');

router.post('/comments', commentsCtl.create);
router.delete('comments/:commentId', commentsCtl.remove);
router.put('/comments/:id', commentsCtl.update);

module.exports = router;