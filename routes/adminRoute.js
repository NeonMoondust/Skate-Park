const express = require('express');
const controller = require('../controllers/adminController.js');

const router = express.Router();

router.get('/', controller.admin_index);
router.put('/', controller.admin_changeState);

module.exports = router;