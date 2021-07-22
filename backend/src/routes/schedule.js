// Developed by Milan Ganesh Acharya
const express = require('express');

const router  = express.Router(); 

const scheduleController = require('../controllers/schedule');
router.get('/schedule/:id', scheduleController.userSchedule);

module.exports = router; 