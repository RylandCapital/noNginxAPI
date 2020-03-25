const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momomonthlySchema = new Schema({
    month: { type: String, required: true },
    spy_monthly_returns: { type: Number, required: true },
    momo_monthly_returns: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'momomonthly'
});

const momomonthly = mongoose.model('momomonthly', momomonthlySchema);

module.exports = momomonthly;