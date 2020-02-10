
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spxSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'spx'
});

const spx = mongoose.model('spx', spxSchema);

module.exports = spx;