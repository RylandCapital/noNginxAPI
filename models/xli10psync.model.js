const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xli10psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xli10psync'
});

const xli10psync = mongoose.model('xli10psync', xli10psyncSchema);

module.exports = xli10psync;