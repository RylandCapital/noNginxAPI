const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vxx2sdSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'vxx2sd'
});

const vxx2sd = mongoose.model('vxx2sd', vxx2sdSchema);

module.exports = vxx2sd;