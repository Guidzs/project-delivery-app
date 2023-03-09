const {
  insertUserService,
  removeUserService,
  getAllUsersListService,
} = require('../Services/adminService');

const insertUserController = async (req, res) => { // função de controle de inserção de novo usuário no banco de dados
  try {
    const response = await insertUserService(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(409).json('ERROR!')
    console.log(error);
  }
};

const removeUserController = async (req, res) => { // função de controle de remoção do cadastro de usuário no banco de dados
  try {
    console.log('Amigo Estou aqui 1');
    const { id } = req.params;
    const response = await removeUserService(id);
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

const getAllUsersListController = async (_req, res) => { // função de controle de exibição da lista de todos os usuários do banco de dados
  try {
    console.log('amigo estou aqui!')
    const response = await getAllUsersListService();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  insertUserController,
  removeUserController,
  getAllUsersListController,
};
