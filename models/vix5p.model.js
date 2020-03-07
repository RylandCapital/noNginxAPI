const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vix5pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'vix5p'
});

const vix5p = mongoose.model('vix5p', vix5pSchema);

module.exports = vix5p;