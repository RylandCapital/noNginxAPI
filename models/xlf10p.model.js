const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlf10pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlf10p'
});

const xlf10p = mongoose.model('xlf10p', xlf10pSchema);

module.exports = xlf10p;