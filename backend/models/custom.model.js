
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customSchema = new Schema({'date': { type: Date, required: true },
'fbs_roc3': { type: Number, required: true },
'fbs_roc5': { type: Number, required: true },
'fbs_roc8': { type: Number, required: true }
}, {
  timestamps: true,
  collection: 'custom'
});

const custom = mongoose.model('custom', customSchema);

module.exports = custom;