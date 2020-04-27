const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vix5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'vix5psync'
});

const vix5psync = mongoose.model('vix5psync', vix5psyncSchema);

module.exports = vix5psync;