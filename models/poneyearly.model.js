const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poneyearlySchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'poneyearly'
});

const poneyearly = mongoose.model('poneyearly', poneyearlySchema);

module.exports = poneyearly;