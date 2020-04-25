const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlv10psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlv10psync'
});

const xlv10psync = mongoose.model('xlv10psync', xlv10psyncSchema);

module.exports = xlv10psync;