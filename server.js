const express = require('express');
const connectToDB = require('./config/db');

const app = express();

// Connect to Database
connectToDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API is now running...'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
