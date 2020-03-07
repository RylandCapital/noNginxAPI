const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlb10Schema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlb10'
});

const xlb10 = mongoose.model('xlb10', xlb10Schema);

module.exports = xlb10;