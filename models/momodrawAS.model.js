const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momodrawASSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'momoAS'
});

const momodrawAS = mongoose.model('momodrawAS', momodrawASSchema);

module.exports = momodrawAS;