const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mscorefiveSchema = new Schema({
    index: { type: Date, required: true },
    spy_machine_score: { type: Number, required: true },
    xlb_machine_score: { type: Number, required: true },
    xle_machine_score: { type: Number, required: true },
    xlf_machine_score: { type: Number, required: true },
    xli_machine_score: { type: Number, required: true },
    xlv_machine_score: { type: Number, required: true },
    xlp_machine_score: { type: Number, required: true },
    xly_machine_score: { type: Number, required: true },
    xlk_machine_score: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'mscorefive'
});

const mscorefive= mongoose.model('mscorefive', mscorefiveSchema);

module.exports = mscorefive;