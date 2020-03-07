const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlv5pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlv5p'
});

const xlv5p = mongoose.model('xlv5p', xlv5pSchema);

module.exports = xlv5p;