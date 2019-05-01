require('./config');
const mongoose = require('mongoose');

const DB_URL = process.env.DATABASE;

const options = {
  useNewUrlParser: true
};
mongoose.connect(
  DB_URL,
  options,
  err => {
    if (err) throw new Error(err);
    // else console.log('Database connected');
  }
);

module.exports = mongoose;
