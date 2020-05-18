const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const simonthlySchema = new Schema({
}, {
  timestamps: true,
  collection: 'simonthly'
});

const simonthly = mongoose.model('simonthly', simonthlySchema);

module.exports = simonthly;