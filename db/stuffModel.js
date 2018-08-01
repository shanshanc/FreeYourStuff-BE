const mongoose = require('mongoose')

const stuffSchema = mongoose.Schema({

  time: {
    type: Date,
    default: Date.now()
  },
  picture: {
    type: String,
    required: true
  },
  location: {
    type: Object
  },
  address: {
    type: String
  },
  tags: {
    type: [String]
  },
  updated: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Stuff', stuffSchema)
