const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlb5pSchema = new Schema({
  date: { type: Date, required: true },
  index: { type: String, required: true },
  median: { type: Number, required: true },
  obs: { type: Number, required: true },
  base_median: { type: Number, required: true },
  base_std: { type: Number, required: true },
  ticker: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlb5p'
});

const xlb5p = mongoose.model('xlb5p', xlb5pSchema);

module.exports = xlb5p;