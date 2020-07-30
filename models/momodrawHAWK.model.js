const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momohawkSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'momohawk'
});

const momohawk = mongoose.model('momohawk', momohawkSchema);

module.exports = momohawk;