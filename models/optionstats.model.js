const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionstatsSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'optionstats'
});

const optionstats = mongoose.model('optionstats', optionstatsSchema);

module.exports = optionstats;