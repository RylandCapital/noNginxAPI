const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peventshSchema = new Schema({'ticker': { type: String, required: true },
'signal': { type: String, required: true },
'start_date': { type: Date, required: true },
'end_date': { type: Date, required: true },
'tf_of_signal': { type: Number, required: true },
'cost_basis': { type: Number, required: true },
'last': { type: Number, required: true },
'PNL': { type: Number, required: true }
}, {
  timestamps: true,
  collection: 'peventsh'
});

const peventsh = mongoose.model('peventsh', peventshSchema);

module.exports = peventsh;