const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tlt10pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'tlt10p'
});

const tlt10p = mongoose.model('tlt10p', tlt10pSchema);

module.exports = tlt10p;