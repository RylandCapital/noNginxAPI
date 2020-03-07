const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlp5pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlp5p'
});

const xlp5p = mongoose.model('xlp5p', xlp5pSchema);

module.exports = xlp5p;