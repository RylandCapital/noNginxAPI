const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlfmlsyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlfmlsync'
});

const xlfmlsync = mongoose.model('xlfmlsync', xlfmlsyncSchema);

module.exports = xlfmlsync;