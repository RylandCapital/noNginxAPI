const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const twosddfactiveSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'twosddfactive'
});

const twosddfactive = mongoose.model('twosddfactive', twosddfactiveSchema);

module.exports = twosddfactive;