const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xle10psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xle10psync'
});

const xle10psync = mongoose.model('xle10psync', xle10psyncSchema);

module.exports = xle10psync;