const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spyIA5Schema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'es5'
});

const spyIA5 = mongoose.model('spyIA5', spyIA5Schema);

module.exports = spyIA5;