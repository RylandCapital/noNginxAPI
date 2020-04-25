const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xly5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xly5psync'
});

const xly5psync = mongoose.model('xly5psync', xly5psyncSchema);

module.exports = xly5psync;