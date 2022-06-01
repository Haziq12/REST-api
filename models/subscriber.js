const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name:{
    type: String,
    required: True
  },
  subscribedTo: {
    type: String,
    required: True
  },
  subscribeDate: {
    type: Date,
    required: True,
    default: Date.now
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)