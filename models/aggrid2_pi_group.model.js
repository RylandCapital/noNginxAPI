const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aggrid2_groupSchema = new Schema({
}, {
  timestamps: true,
  collection: 'aggrid2group'
});

const aggrid2_group = mongoose.model('aggrid2_group', aggrid2_groupSchema);

module.exports = aggrid2_group;




