const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peventsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'pevents'
});

const pevents = mongoose.model('pevents', peventsSchema);

module.exports = pevents;