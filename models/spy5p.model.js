const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spy5pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'spy5p'
});

const spy5p = mongoose.model('spy5p', spy5pSchema);

module.exports = spy5p;