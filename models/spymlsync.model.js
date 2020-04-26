const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spymlsyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'spymlsync'
});

const spymlsync = mongoose.model('spymlsync', spymlsyncSchema);

module.exports = spymlsync;