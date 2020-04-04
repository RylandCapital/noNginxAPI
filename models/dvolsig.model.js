const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dvolsigSchema = new Schema({'index': { type: Date, required: true },
'CB Points': { type: Number, required: true },
'VIX_VXV': { type: Number, required: true },
'FiveDay_Avg_CB': { type: Number, required: true },
'VIX Curve Signal': { type: String, required: true },
'CB_Points_pct_tile': { type: Number, required: true },
'VIX_VXV_pct_tile': { type: Number, required: true },
'FiveDay_CB_pct_tile)': { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'dvolsig'
});

const dvolsig = mongoose.model('dvolsig', dvolsigSchema);

module.exports =dvolsig;