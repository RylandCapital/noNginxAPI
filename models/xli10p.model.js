const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xli10pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xli10p'
});

const xli10p = mongoose.model('xli10p', xli10pSchema);

module.exports = xli10p;