const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlbmlSchema = new Schema({
  index: { type: Date, required: true },
  maxprec_short: { type: Number, required: true },
  x2xrand_short: { type: Number, required: true },
  maxf1_short: { type: Number, required: true },
  _5: { type: Number, required: true },
  maxprec_long: { type: Number, required: true },
  maxf1_long: { type: Number, required: true },
  _10: { type: Number, required: true },
  x2xrand_long: { type: Number, required: true },
  proba_1_short: { type: Number, required: true },
  proba_diff: { type: Number, required: true },
  proba_1_long: { type: Number, required: true },
  _date: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'xlbml'
});

const xlbml = mongoose.model('xlbml', xlbmlSchema);

module.exports = xlbml;