const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dyvolmasterSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'dyvolmaster'
});

const dyvolmaster = mongoose.model('dyvolmaster', dyvolmasterSchema);

module.exports = dyvolmaster;