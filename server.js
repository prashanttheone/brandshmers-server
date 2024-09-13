const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();
const cors = require('cors');
const dbConnect = require('./config/database');




app.use(cors({
  origin: "*",
  credentials: true
}));

// Parse JSON requests using built-in Express middleware
app.use(express.json());

// Use the contact route
app.use('/save', routes);
app.use ('/api', routes);

// Generic error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT ;
dbConnect(); // Connect to the database
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Default route
app.get("/", (req, res) => {
  res.send("This is HOMEPAGE");
});