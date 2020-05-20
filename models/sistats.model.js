const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sistatsSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'sistats'
});

const sistats = mongoose.model('sistats', sistatsSchema);

module.exports = sistats;