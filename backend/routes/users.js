const express = require('express');
const router = express.Router();
// const ensureLoggedIn = require('../config/ensureLoggedIn');
const usersCtl = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Login Route
router.post('/login', usersCtl.login)

// Register Route
router.post('/register', usersCtl.create)

// Verify Login Route
router.get('/isUserAuth', ensureLoggedIn, usersCtl.checkAuth)

module.exports = router;
