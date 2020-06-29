const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const twosddfSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'twosddf'
});

const twosddf = mongoose.model('twosddf', twosddfSchema);

module.exports = twosddf;