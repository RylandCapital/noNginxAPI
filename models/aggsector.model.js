const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aggsectorSchema = new Schema({
}, {
  timestamps: true,
  collection: 'aggsector'
});

const aggsector = mongoose.model('aggsector', aggsectorSchema);

module.exports = aggsector;