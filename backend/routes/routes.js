const express = require('express');
const router = express.Router();
const { printAlltaskref,taskrefbyId, createtaskref,updatetaskref,deleteUser} = require('../controllers/userController.js');
const Auth_middleware=require('../middlewares/authMiddleware.js')
const {registration,login}=require('../controllers/AuthControllers.js');

router.post('/signup',registration);

router.get('/login',login);

router.get('/',Auth_middleware,printAlltaskref);

router.get('/:id', Auth_middleware,taskrefbyId);

router.post('/create',Auth_middleware, createtaskref);

router.put('/:id', Auth_middleware,updatetaskref);

router.delete('/:id',Auth_middleware,deleteUser);

module.exports = router;
