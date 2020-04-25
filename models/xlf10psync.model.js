const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlf10psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlf10psync'
});

const xlf10psync = mongoose.model('xlf10psync', xlf10psyncSchema);

module.exports = xlf10psync;