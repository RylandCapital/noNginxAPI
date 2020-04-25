const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spy10psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'spy10psync'
});

const spy10psync = mongoose.model('spy10psync', spy10psyncSchema);

module.exports = spy10psync;