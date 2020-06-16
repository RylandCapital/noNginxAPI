const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momodrawPONESchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'momoPONE'
});

const momodrawPONE = mongoose.model('momodrawPONE', momodrawPONESchema);

module.exports = momodrawPONE;