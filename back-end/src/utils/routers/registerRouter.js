const express = require('express');

const router = express.Router();

const registerController = require('../../Controllers/registerController');

const validateNewUser = require('../../middleware/validateNewUser');

router.post('/', validateNewUser, registerController);

module.exports = router;
