const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spxmlSchema = new Schema({
  long_proba_1: { type: Number, required: true },
  long__index: { type: Date, required: true },
  short_proba_1: { type: Number, required: true },
  long_short_proba: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'spx_ml'
});

const spxml = mongoose.model('spxml', spxmlSchema);

module.exports = spxml;