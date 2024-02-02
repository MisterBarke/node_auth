const {Router} = require('express');
const router = Router();
const authController = require('../constrollers/authController')
const mailer = require('../mailer');
const { requireAuth } = require('../middleware/authmiddleware');
router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.post('/home', requireAuth, mailer.send_email);
module.exports = router;