const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratioSchema = new Schema({
}, {
  timestamps: true,
  collection: 'ratio_charts'
});

const ratio = mongoose.model('ratio', ratioSchema);

module.exports = ratio;




