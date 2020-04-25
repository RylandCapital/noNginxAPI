const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlk10psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlk10psync'
});

const xlk10psync = mongoose.model('xlk10psync', xlk10psyncSchema);

module.exports = xlk10psync;