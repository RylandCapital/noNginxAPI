const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const twosdthreshSchema = new Schema({'_index': { type: Date, required: true },
'_5': { type: Number, required: true },
'_90th': { type: Number, required: true },
'_10th': { type: Number, required: true },
'_10': { type: Number, required: true },
'proba_diff': { type: Number, required: true },
'ticker': { type: String, required: true },
}, {
  timestamps: true,
  collection: 'twosdthresh'
});

const twosdthresh = mongoose.model('twosdthresh', twosdthreshSchema);

module.exports =twosdthresh;