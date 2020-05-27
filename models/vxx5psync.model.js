const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vxx5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'vxx5psync'
});

const vxx5psync = mongoose.model('vxx5psync', vxx5psyncSchema);

module.exports = vxx5psync;