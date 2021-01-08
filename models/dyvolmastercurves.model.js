const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dyvolmastercurvesSchema = new Schema({
    _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'curves'
});

const dyvolmastercurves = mongoose.model('dyvolmastercurves', dyvolmastercurvesSchema);

module.exports = dyvolmastercurves;