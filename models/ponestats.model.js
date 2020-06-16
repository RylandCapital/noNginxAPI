const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ponestatsSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'ponestats'
});

const ponestats = mongoose.model('ponestats', ponestatsSchema);

module.exports = ponestats;