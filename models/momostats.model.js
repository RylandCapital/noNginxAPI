const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momostatsSchema = new Schema({
    stat: { type: String, required: true },
    value: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'momostats'
});

const momostats= mongoose.model('momostats', momostatsSchema);

module.exports = momostats;