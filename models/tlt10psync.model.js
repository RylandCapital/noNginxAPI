const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tlt10psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'tlt10psync'
});

const tlt10psync = mongoose.model('tlt10psync', tlt10psyncSchema);

module.exports = tlt10psync;