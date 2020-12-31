const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aggrid2_cfg_groupSchema = new Schema({
}, {
  timestamps: true,
  collection: 'aggrid2_cfg_group'
});

const aggrid2_cfg_group = mongoose.model('aggrid2_cfg_group', aggrid2_cfg_groupSchema);

module.exports = aggrid2_cfg_group;




