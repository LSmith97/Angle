const express = require('express');
const router = express.Router();
// const ensureLoggedIn = require('../config/ensureLoggedIn');
const usersCtl = require('../controllers/users')

// Login Route
router.post('/login', usersCtl.login)

// Register Route
router.post('/register', usersCtl.create)

module.exports = router;
