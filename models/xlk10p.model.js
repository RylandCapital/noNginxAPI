const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlk10pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlk10p'
});

const xlk10p = mongoose.model('xlk10p', xlk10pSchema);

module.exports = xlk10p;