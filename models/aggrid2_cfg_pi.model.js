const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aggrid2_cfgSchema = new Schema({
}, {
  timestamps: true,
  collection: 'aggrid2_cfg'
});

const aggrid2_cfg = mongoose.model('aggrid2_cfg', aggrid2_cfgSchema);

module.exports = aggrid2_cfg;




