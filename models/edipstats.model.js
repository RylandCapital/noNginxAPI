const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const edipstatsSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'edipstats'
});

const edipstats = mongoose.model('edipstats', edipstatsSchema);

module.exports = edipstats;