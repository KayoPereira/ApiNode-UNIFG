const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const users = [
  { id: 1, name: 'João' },
  { id: 2, name: 'Maria' },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send('Usuário não encontrado');
  }
  res.json(user);
});

app.post('/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(user);
  res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send('Usuário não encontrado');
  }
  user.name = req.body.name;
  res.json(user);
});

app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).send('Usuário não encontrado');
  }
  users.splice(userIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});