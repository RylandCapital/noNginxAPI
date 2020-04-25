const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vix10psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'vix10psync'
});

const vix10psync = mongoose.model('vix10psync', vix10psyncSchema);

module.exports = vix10psync;