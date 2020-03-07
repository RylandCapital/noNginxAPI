const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlu10pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlu10p'
});

const xlu10p = mongoose.model('xlu10p', xlu10pSchema);

module.exports = xlu10p;