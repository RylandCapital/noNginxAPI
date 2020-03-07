const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tlt5pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'tlt5p'
});

const tlt5p = mongoose.model('tlt5p', tlt5pSchema);

module.exports = tlt5p;