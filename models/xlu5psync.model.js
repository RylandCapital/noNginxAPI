const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlu5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlu5psync'
});

const xlu5psync = mongoose.model('xlu5psync', xlu5psyncSchema);

module.exports = xlu5psync;