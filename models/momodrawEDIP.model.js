const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momodrawEDIPSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'momoEDIP'
});

const momodrawEDIP = mongoose.model('momodrawEDIP', momodrawEDIPSchema);

module.exports = momodrawEDIP;