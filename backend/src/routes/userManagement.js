const express = require('express');
const router = express.Router();

const userManagementController = require('../controllers/userManagementController');
router.post('/users/create', userManagementController.create);
router.post('/users/login', userManagementController.authenticate);
router.get('/users/get/:id', userManagementController.get);
router.post('/users/update', userManagementController.update);

module.exports = router;