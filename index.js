const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, DevOps World! My Pipeline is working!');
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Running on port ${PORT}`));

module.exports = { app, server };