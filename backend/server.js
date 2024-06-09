// backend/server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL setup
const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'yourdatabase',
  password: 'yourpassword',
  port: 5432,
});

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/yourdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Example endpoint
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
