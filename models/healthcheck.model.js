const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const healthcheckSchema = new Schema({
  _id: { type: Number, required: false },
}, {
  timestamps: true,
  collection: 'hctest'
});

const healthcheck = mongoose.model('healthcheck', healthcheckSchema);

module.exports = healthcheck;