
const express = require('express');
const { signup, signin } = require('../controllers/authController');


const router = express.Router();

// POST /signup
router.post('/signup', signup);

// POST /signin
router.post('/signin', signin);


module.exports = router;
