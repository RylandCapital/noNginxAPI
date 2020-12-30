const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aggrid1EW_piSchema = new Schema({
}, {
  timestamps: true,
  collection: 'sectorgrid'
});

const aggrid1EW_pi = mongoose.model('aggrid1EW_pi', aggrid1EW_piSchema);

module.exports = aggrid1EW_pi;




