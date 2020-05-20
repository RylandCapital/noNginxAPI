const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const siyearlySchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'siyearly'
});

const siyearly = mongoose.model('siyearly', siyearlySchema);

module.exports = siyearly;