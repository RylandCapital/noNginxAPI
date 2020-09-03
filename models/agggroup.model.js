const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agggroupSchema = new Schema({
}, {
  timestamps: true,
  collection: 'agggroup'
});

const agggroup = mongoose.model('agggroup', agggroupSchema);

module.exports = agggroup;