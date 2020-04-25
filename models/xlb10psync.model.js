const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlb10psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlb10psync'
});

const xlb10psync = mongoose.model('xlb10psync', xlb10psyncSchema);

module.exports = xlb10psync;