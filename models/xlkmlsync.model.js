const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xlkmlsyncSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'xlkmlsync'
});

const xlkmlsync = mongoose.model('xlkmlsync', xlkmlsyncSchema);

module.exports = xlkmlsync;