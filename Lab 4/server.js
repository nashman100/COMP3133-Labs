require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');

const app = express();

app.use(express.json()); 

app.use('/users', userController);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));