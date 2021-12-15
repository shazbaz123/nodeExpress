const { Router } = require('express');
const { addUser, listUsers, updateUser, deleteUser, welcome } = require('./userController');
const { hashPassword, checkPassword } = require('../middleware');
const userRouter = Router();

userRouter.post('/user', hashPassword, addUser);
userRouter.get('/user', listUsers);
userRouter.put('/user', updateUser);
userRouter.delete('/user', deleteUser);
userRouter.get('/check', checkPassword, welcome);


module.exports = userRouter;