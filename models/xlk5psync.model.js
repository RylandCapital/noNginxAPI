const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlk5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlk5psync'
});

const xlk5psync = mongoose.model('xlk5psync', xlk5psyncSchema);

module.exports = xlk5psync;