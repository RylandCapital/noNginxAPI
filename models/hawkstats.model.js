const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hawkmonthlySchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'hawkmonthly'
});

const hawkmonthly = mongoose.model('hawkmonthly', hawkmonthlySchema);

module.exports = hawkmonthly;