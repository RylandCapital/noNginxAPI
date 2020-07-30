const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hawkstatsSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'hawkstats'
});

const hawkstats = mongoose.model('hawkstats', hawkstatsSchema);

module.exports = hawkstats;