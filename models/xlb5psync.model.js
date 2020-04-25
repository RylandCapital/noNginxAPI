const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlb5psyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlb5psync'
});

const xlb5psync = mongoose.model('xlb5psync', xlb5psyncSchema);

module.exports = xlb5psync;