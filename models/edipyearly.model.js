const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const edipyearlySchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'edipyearly'
});

const edipyearly = mongoose.model('edipyearly', edipyearlySchema);

module.exports = edipyearly;