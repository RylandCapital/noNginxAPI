const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hctestSchema = new Schema({
  _index: { type: Array, required: true },
  proba_1_long: { type: Array, required: true },  
  _id: { type: Array, required: false }, 
}, {
  timestamps: true,
  collection: 'spyml_col'
});

const hctest = mongoose.model('hctest',hctestSchema);

module.exports = hctest;