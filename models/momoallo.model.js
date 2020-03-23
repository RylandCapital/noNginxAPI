const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momoalloSchema = new Schema({
    index: { type: String, required: true },
    value: { type: Number, required: true },
    pnl: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'momoallo'
});

const momoallo= mongoose.model('momoallo', momoalloSchema);

module.exports = momoallo;