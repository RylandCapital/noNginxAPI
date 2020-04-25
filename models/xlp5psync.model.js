const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlp5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlp5psync'
});

const xlp5psync = mongoose.model('xlp5psync', xlp5psyncSchema);

module.exports = xlp5psync;