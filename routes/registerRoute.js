const express = require('express');
const controller = require('../controllers/registerController.js');

const router = express.Router();

router.get('/', controller.register_index);
router.post('/registering', controller.register_registering);

module.exports = router;