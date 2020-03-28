const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mscoreSchema = new Schema({
    index: { type: String, required: true },
    pulse5_median_diff: { type: Number, required: true },
    pulse10_median_diff: { type: Number, required: true },
    longprob: { type: Number, required: true },
    shortprob: { type: Number, required: true },
    diff: { type: Number, required: true },
    machine_score5: { type: Number, required: true },
    machine_score10: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'mscore'
});

const mscore= mongoose.model('mscore', mscoreSchema);

module.exports = mscore;