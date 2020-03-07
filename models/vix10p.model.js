const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vix10pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'vix10p'
});

const vix10p = mongoose.model('vix10p', vix10pSchema);

module.exports = vix10p;