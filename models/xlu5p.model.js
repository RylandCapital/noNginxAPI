const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlu5pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlu5p'
});

const xlu5p = mongoose.model('xlu5p', xlu5pSchema);

module.exports = xlu5p;