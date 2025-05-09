const express = require('express');
const {
    register,
    login,
    getMe,
    logout,
    forgotPassword,
    resetPassword,
} = require('../controllers/auth');

const router = express.Router();

// Protect auth middleware
const {protect} = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.route('/me').get(protect, getMe);
router.get('/logout', logout);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;
