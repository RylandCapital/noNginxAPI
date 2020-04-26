const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlymlsyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlymlsync'
});

const xlymlsync = mongoose.model('xlymlsync', xlymlsyncSchema);

module.exports = xlymlsync;