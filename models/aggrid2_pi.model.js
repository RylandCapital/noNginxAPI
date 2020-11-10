const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aggrid2Schema = new Schema({
}, {
  timestamps: true,
  collection: 'aggrid2'
});

const aggrid2 = mongoose.model('aggrid2', aggrid2Schema);

module.exports = aggrid2;




