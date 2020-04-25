const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spy5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'spy5psync'
});

const spy5psync = mongoose.model('spy5psync', spy5psyncSchema);

module.exports = spy5psync;