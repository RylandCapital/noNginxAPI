const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xly10psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xly10psync'
});

const xly10psync = mongoose.model('xly10psync', xly10psyncSchema);

module.exports = xly10psync;