const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dowscoresSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'dowscores'
});

const dowscores = mongoose.model('dowscores', dowscoresSchema);

module.exports = dowscores;