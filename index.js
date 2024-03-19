// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000 || 4000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
