const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xle5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xle5psync'
});

const xle5psync = mongoose.model('xle5psync', xle5psyncSchema);

module.exports = xle5psync;