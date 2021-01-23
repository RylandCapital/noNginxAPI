const mongoose = require('mongoose');
const { send } = require('process');
const Schema = mongoose.Schema;



const spacyearlySchema = new Schema({
}, {
  timestamps: true,
  collection: 'spacyearly'
});

const spacmonthlySchema = new Schema({
}, {
  timestamps: true,
  collection: 'spacmonthly'
});

const momospacSchema = new Schema({
}, {
  timestamps: true,
  collection: 'momospac'
});

const spacstatsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'spacstats'
});

const spacalloSchema = new Schema({
}, {
  timestamps: true,
  collection: 'momoallospac'
});


const spacyearly = mongoose.model('spacyearly', spacyearlySchema);
const spacmonthly  = mongoose.model('spacmonthly', spacmonthlySchema);
const cmomospac  = mongoose.model('momospac', momospacSchema);
const spacstats  = mongoose.model('spacstats', spacstatsSchema);
const spacallo  = mongoose.model('spacallo', spacalloSchema);


module.exports = {
    spacyearly,
    spacmonthly ,
    cmomospac ,
    spacstats ,
    spacallo,
    
  }