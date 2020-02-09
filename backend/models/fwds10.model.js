const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fwds10Schema = new Schema({_date: { type: Date, required: true },
_10: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'fwds10'
});

const fwds10 = mongoose.model('fwds10', fwds10Schema);

module.exports = fwds10;