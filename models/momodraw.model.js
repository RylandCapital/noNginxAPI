const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momodrawSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'momodraw'
});

const momodraw= mongoose.model('momodraw', momodrawSchema);

module.exports = momodraw;