const mongoose = require('mongoose');

const placingModel = mongoose.Schema({
  date: {
    type: Date,
    unique: true,
    required: '{PATH} is required!'
  },
  seats: [{
    id: {
      type: Number,
    },
    occupied: {
      type: Boolean,
      required: true,
      default: false
    },
    person: {
      type: String,
      default: null
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Placing', placingModel);