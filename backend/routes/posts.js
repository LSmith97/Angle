const express = require('express');
const router = express.Router();
const postCtl = require('../controllers/posts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET users listing. */

// Index Route
router.get('/', postCtl.index);

// Show Route
router.get('/:id', postCtl.show);

// Create Route
router.post('/', ensureLoggedIn, postCtl.create);

// Delete Route
router.delete('/:id', ensureLoggedIn, postCtl.remove);

// Update Route
router.put('/:id', ensureLoggedIn, postCtl.update);

module.exports = router;