const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');

router.get('/',UserController.printAlltask);

router.get('/:id',()=>{ console.log("running");UserController.userbyId});

router.post('/',()=>{ console.log("running");UserController.createUser});

router.put('/:id',()=>{ console.log("running");UserController.updateUser});

router.delete('/:id',()=>{console.log("running");UserController.deleteUser});

module.exports = router;
