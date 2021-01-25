const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ratiofinancialsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'ratio_finance'
});



const ratiofinancials= mongoose.model('ratiofinancials', ratiofinancialsSchema);



module.exports = {
    ratiofinancials,
    
    
  }