const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlv10pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlv10p'
});

const xlv10p = mongoose.model('xlv10p', xlv10pSchema);

module.exports = xlv10p;