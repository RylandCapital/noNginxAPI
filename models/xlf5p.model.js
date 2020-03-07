const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlf5pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlf5p'
});

const xlf5p = mongoose.model('xlf5p', xlf5pSchema);

module.exports = xlf5p;