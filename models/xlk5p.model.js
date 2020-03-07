const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlk5pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlk5p'
});

const xlk5p = mongoose.model('xlk5p', xlk5pSchema);

module.exports = xlk5p;