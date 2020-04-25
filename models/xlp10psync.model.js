const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlp10psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlp10psync'
});

const xlp10psync = mongoose.model('xlp10psync', xlp10psyncSchema);

module.exports = xlp10psync;