const express = require('express');
const router = express.Router();

const users = require('../controllers/singup/user.singup.controllers.js');

router.post('/signup', users.signup);
router.post('/login', users.login);
router.post('/forgotpassword', users.forgotPassword);
router.post('/resetpassword/:token',users.resetPassword);

router.get('/valid/:token', users.verify);


module.exports = router;