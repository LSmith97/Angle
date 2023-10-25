const express = require('express');
const router = express.Router();
const commentsCtl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Create Route
router.post('/posts/:id/comments', ensureLoggedIn, commentsCtl.create);

// Delete Route
router.delete('/posts/:id/comments/:commentId', ensureLoggedIn, commentsCtl.remove);

// Update Route
router.put('/comments/:id', ensureLoggedIn, commentsCtl.update);

module.exports = router;