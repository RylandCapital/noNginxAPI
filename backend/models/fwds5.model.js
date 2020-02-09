const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fwds5Schema = new Schema({_date: { type: Date, required: true },
_5: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'fwds5'
});

const fwds5 = mongoose.model('fwds5', fwds5Schema);

module.exports = fwds5;