const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlu10psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlu10psync'
});

const xlu10psync = mongoose.model('xlu10psync', xlu10psyncSchema);

module.exports = xlu10psync;