// routes/api/v1/hashRoutes.js
const express = require('express');
const router = express.Router();
const hashController = require('../../../controllers/hashController');

router.post('/generate' , hashController.generateHash)

module.exports = router;