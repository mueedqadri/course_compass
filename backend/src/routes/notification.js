const express = require('express');

const router = express.Router();

const NotificationController = require('../controllers/notification');
router.get('/notification/', NotificationController.AllNotification);
module.exports = router;