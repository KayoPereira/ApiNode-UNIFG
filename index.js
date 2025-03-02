const express = require('express');
const app = express();
const port = 3001;
const userRoutes = require('./routes/users');

app.use(express.json());

app.use(userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
