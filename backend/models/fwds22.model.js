const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fwds22Schema = new Schema({_date: { type: Date, required: true },
_22: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'fwds22'
});

const fwds22 = mongoose.model('fwds22', fwds22Schema);

module.exports = fwds22;