const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xli5pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xli5p'
});

const xli5p = mongoose.model('xli5p', xli5pSchema);

module.exports = xli5p;