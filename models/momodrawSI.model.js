const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momodrawSISchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'momoSI'
});

const momodrawSI = mongoose.model('momodrawSI', momodrawSISchema);

module.exports = momodrawSI;