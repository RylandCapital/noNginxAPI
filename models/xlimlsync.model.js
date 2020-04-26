const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlimlsyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlimlsync'
});

const xlimlsync = mongoose.model('xlimlsync', xlimlsyncSchema);

module.exports = xlimlsync;