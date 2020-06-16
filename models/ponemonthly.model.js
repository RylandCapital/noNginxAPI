const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ponemonthlySchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'ponemonthly'
});

const ponemonthly = mongoose.model('ponemonthly', ponemonthlySchema);

module.exports = ponemonthly;