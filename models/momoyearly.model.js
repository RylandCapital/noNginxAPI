const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momoyearlySchema = new Schema({
    month: { type: String, required: true },
    spy_monthly_returns: { type: Number, required: true },
    momo_monthly_returns: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'momoyearly'
});

const momoyearly= mongoose.model('momoyearly', momoyearlySchema);

module.exports = momoyearly;