const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlv5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlv5psync'
});

const xlv5psync = mongoose.model('xlv5psync', xlv5psyncSchema);

module.exports = xlv5psync;