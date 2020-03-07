const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xly10pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xly10p'
});

const xly10p = mongoose.model('xly10p', xly10pSchema);

module.exports = xly10p;