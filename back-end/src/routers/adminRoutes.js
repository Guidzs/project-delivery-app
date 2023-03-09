// importações de bibliotecas
const express = require('express');

// importações de arquivos do projeto
const validateNewUser = require('../middleware/validateNewUser');
const adminVerifyJwt = require('../middleware/adminVerifyJwt');
const {
  insertUserController,
  removeUserController,
  getAllUsersListController,
} = require('../Controllers/adminController');

// SOMENTE IMPORTAÇõES DA APLICAÇÃO ACIMA

const router = express.Router(); // criação do router
router.get('/get/userlist', adminVerifyJwt, getAllUsersListController); // declaração de rota get('/admin/get/userlist')
router.delete('/remove/user/:id', adminVerifyJwt, removeUserController); // declaração da rota delete('/admin/remove/user/:id')
router.post('/register/newuser', adminVerifyJwt, validateNewUser, insertUserController); // declaração da rota post('/admin/register/newuser')

module.exports = router;
