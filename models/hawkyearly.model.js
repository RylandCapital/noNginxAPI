const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hawkyearlySchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'hawkyearly'
});

const hawkyearly = mongoose.model('hawkyearly', hawkyearlySchema);

module.exports = hawkyearly;