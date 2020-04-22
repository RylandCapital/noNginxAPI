const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hctestSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'hctest'
});

const hctest = mongoose.model('hctest', hctestSchema);

module.exports = hctest;