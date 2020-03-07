const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlp10pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlp10p'
});

const xlp10p = mongoose.model('xlp10p', xlp10pSchema);

module.exports = xlp10p;