const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peventsSchema = new Schema({'ticker': { type: String, required: true },
'signal': { type: Number, required: true },
'start_date': { type: Date, required: true },
'end_date': { type: Date, required: true },
'tf_of_signal': { type: Number, required: true },
'cost_basis': { type: Number, required: true },
'last': { type: Number, required: true },
'PNL': { type: Number, required: true }
}, {
  timestamps: true,
  collection: 'pevents'
});

const pevents = mongoose.model('pevents', peventsSchema);

module.exports = pevents;