const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlpmlsyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlpmlsync'
});

const xlpmlsync = mongoose.model('xlpmlsync', xlpmlsyncSchema);

module.exports = xlpmlsync;