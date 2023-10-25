const express = require('express');
const router = express.Router();
// const ensureLoggedIn = require('../config/ensureLoggedIn');
const usersCtl = require('../controllers/users')

router.get('/:id', usersCtl.show);

router.post('/login', usersCtl.login)

router.post('/register', usersCtl.create)

module.exports = router;
