const express = require('express');
const router = express.Router();
const { printAlltaskref,taskrefbyId, createtaskref,updatetaskref,deleteUser} = require('../controllers/userController.js');

router.get('/', printAlltaskref);

router.get('/:id', taskrefbyId);

router.post('/create', createtaskref);

router.put('/:id', updatetaskref);

router.delete('/:id',deleteUser);

module.exports = router;
