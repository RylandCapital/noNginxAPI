const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tlt5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'tlt5psync'
});

const tlt5psync = mongoose.model('tlt5psync', tlt5psyncSchema);

module.exports = tlt5psync;