const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, DevOps World! My Pipeline is working!');
});

// ONLY start the server if this file is run directly (local development)
// Vercel will handle the "listening" part itself
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
}

// Export the app for Vercel and for tests
module.exports = app;