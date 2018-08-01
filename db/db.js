

const mongoose = require('mongoose')

const options = {
  useNewUrlParser: true
}

//mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, options)
mongoose.connect('mongodb://localhost:27017/freeyourstuff', options)
const db = mongoose.connection
