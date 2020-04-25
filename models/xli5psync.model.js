const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xli5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xli5psync'
});

const xli5psync = mongoose.model('xli5psync', xli5psyncSchema);

module.exports = xli5psync;