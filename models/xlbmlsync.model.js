const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlbmlsyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlbmlsync'
});

const xlbmlsync = mongoose.model('xlbmlsync', xlbmlsyncSchema);

module.exports = xlbmlsync;