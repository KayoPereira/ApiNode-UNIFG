const express = require('express');
const router = express.Router();
const userModel = require('../models/user');

router.get('/users', (req, res) => {
  const users = userModel.getUsers();
  res.json(users);
});

router.get('/users/:id', (req, res) => {
  const user = userModel.getUserById(parseInt(req.params.id));
  if (!user) {
    return res.status(404).send('Usuário não encontrado');
  }
  res.json(user);
});

router.post('/users', (req, res) => {
  const { name } = req.body;
  const newUser = userModel.createUser(name);
  res.status(201).json(newUser);
});

router.put('/users/:id', (req, res) => {
  const { name } = req.body;
  const updatedUser = userModel.updateUser(parseInt(req.params.id), name);
  if (!updatedUser) {
    return res.status(404).send('Usuário não encontrado');
  }
  res.json(updatedUser);
});

router.delete('/users/:id', (req, res) => {
  const deleted = userModel.deleteUser(parseInt(req.params.id));
  if (!deleted) {
    return res.status(404).send('Usuário não encontrado');
  }
  res.status(204).send();
});

module.exports = router;
