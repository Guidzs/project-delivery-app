const express = require('express');

const router = express.Router();

const loginController = require('../../Controllers/loginController');

const validadeUser = require('../../middleware/validateUser');

router.post('/', validadeUser, loginController);

module.exports = router;
