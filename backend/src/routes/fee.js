// Developed by Milan Ganesh Acharya
const express = require('express');

const router  = express.Router(); 

const feeController = require('../controllers/fee');
router.get('/fee/:termId/:userId', feeController.termFee);
router.get('/course_terms/:userId', feeController.courseTerm);

module.exports = router; 