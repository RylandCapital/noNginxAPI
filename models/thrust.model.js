const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thrustSchema = new Schema({'index': { type: Date, required: true },
'vxx_thrust10': { type: Number, required: true },
'vxx_thrust20': { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'thrust'
});

const thrust = mongoose.model('thrust', thrustSchema);

module.exports = thrust;