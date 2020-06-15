const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const edipmonthlySchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'edipmonthly'
});

const edipmonthly = mongoose.model('edipmonthly', edipmonthlySchema);

module.exports = edipmonthly;