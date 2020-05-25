const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const asstatsSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'asstats'
});

const asstats = mongoose.model('asstats', asstatsSchema);

module.exports = asstats;