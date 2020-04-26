const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlvmlsyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlvmlsync'
});

const xlvmlsync = mongoose.model('xlvmlsync', xlvmlsyncSchema);

module.exports = xlvmlsync;