
const express = require('express');
const bookingController = require('../controllers/bookingController')

const router = express.Router();


// POST /booking-service
router.post('/booking-service', bookingController);


module.exports = router;