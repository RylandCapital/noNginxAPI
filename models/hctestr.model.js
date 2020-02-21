const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hctestrSchema = new Schema({
  _index: { type: Date, required: true },
  proba_1_long: { type: Number, required: true },  
  _id: { type: Number, required: false }, 
}, {
  timestamps: true,
  collection: 'spyml_row'
});

const hctestr = mongoose.model('hctestr',hctestrSchema);

module.exports = hctestr;