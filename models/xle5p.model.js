const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xle5pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xle5p'
});

const xle5p = mongoose.model('xle5p', xle5pSchema);

module.exports = xle5p;