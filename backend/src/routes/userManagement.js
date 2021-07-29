const express = require('express');
const router = express.Router();

const userManagementController = require('../controllers/userManagementController');
router.get('/users/create', userManagementController.create);
router.get('/users/login', userManagementController.authenticate);
router.post('/users/:id', userManagementController.get);
router.post('/users/update', userManagementController.update);

module.exports = router;