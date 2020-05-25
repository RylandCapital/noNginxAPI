const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const asyearlySchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'asyearly'
});

const asyearly = mongoose.model('asyearly', asyearlySchema);

module.exports = asyearly;