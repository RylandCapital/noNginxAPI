const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xly5pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xly5p'
});

const xly5p = mongoose.model('xly5p', xly5pSchema);

module.exports = xly5p;