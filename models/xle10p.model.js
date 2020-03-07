const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xle10pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xle10p'
});

const xle10p = mongoose.model('xle10p', xle10pSchema);

module.exports = xle10p;