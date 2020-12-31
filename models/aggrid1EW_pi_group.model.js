const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aggrid1EW_pi_groupSchema = new Schema({
}, {
  timestamps: true,
  collection: 'groupgrid'
});

const aggrid1EW_pi_group = mongoose.model('aggrid1EW_pi_group', aggrid1EW_pi_groupSchema);


module.exports = aggrid1EW_pi_group;






