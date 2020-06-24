const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const covereddfSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'covereddf'
});

const covereddf = mongoose.model('covereddf', covereddfSchema);

module.exports = covereddf;