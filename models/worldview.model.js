const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const worldviewSchema = new Schema({
}, {
  timestamps: true,
  collection: 'worldview'
});

const worldview = mongoose.model('worldview', worldviewSchema);

module.exports = worldview;