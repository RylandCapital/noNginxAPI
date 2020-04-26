const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlemlsyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlemlsync'
});

const xlemlsync = mongoose.model('xlemlsync', xlemlsyncSchema);

module.exports = xlemlsync;