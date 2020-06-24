const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toptenSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'toptendf'
});

const topten = mongoose.model('topten', toptenSchema);

module.exports = topten;