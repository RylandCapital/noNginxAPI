const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlf5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlf5psync'
});

const xlf5psync = mongoose.model('xlf5psync', xlf5psyncSchema);

module.exports = xlf5psync;