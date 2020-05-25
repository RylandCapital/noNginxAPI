const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const asmonthlySchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'asmonthly'
});

const asmonthly = mongoose.model('asmonthly', asmonthlySchema);

module.exports = asmonthly;