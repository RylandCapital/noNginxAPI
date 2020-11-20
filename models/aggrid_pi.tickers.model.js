const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*const worldSchema = new Schema({
}, {
  timestamps: true,
  collection: 'world'
});

const intermarketSchema = new Schema({
}, {
  timestamps: true,
  collection: 'intermarket'
});

const size_styleSchema = new Schema({
}, {
  timestamps: true,
  collection: 'size__style'
});

const cw_sectorSchema = new Schema({
}, {
  timestamps: true,
  collection: 'cw_sector'
});

const ew_sectorSchema = new Schema({
}, {
  timestamps: true,
  collection: 'ew_sector'
});

const sc_sectorSchema = new Schema({
}, {
  timestamps: true,
  collection: 'sc_sector'
}); */

const materialsbSchema = new Schema({
}, {
  timestamps: true,
  collection: 'materialsb'
});

const consumer_staplesbSchema = new Schema({
}, {
  timestamps: true,
  collection: 'consumer_staplesb'
});

const consumer_discretionarybSchema = new Schema({
}, {
  timestamps: true,
  collection: 'consumer_discretionaryb'
});

const energybSchema = new Schema({
}, {
  timestamps: true,
  collection: 'energyb'
});

const financialsbSchema = new Schema({
}, {
  timestamps: true,
  collection: 'financialsb'
});

const health_carebSchema = new Schema({
}, {
  timestamps: true,
  collection: 'health_careb'
});

const industrialsbSchema = new Schema({
}, {
  timestamps: true,
  collection: 'industrialsb'
});

const real_estatebSchema = new Schema({
}, {
  timestamps: true,
  collection: 'real_estateb'
});

const information_technologybSchema = new Schema({
}, {
  timestamps: true,
  collection: 'information_technologyb'
});

const communication_servicesbSchema = new Schema({
}, {
  timestamps: true,
  collection: 'communication_servicesb'
});

const utilitiesbSchema = new Schema({
}, {
  timestamps: true,
  collection: 'utilitiesb'
});


/*const world = mongoose.model('world', worldSchema);
const intermarket = mongoose.model('intermarket', intermarketSchema);
const size_style = mongoose.model('size_style', size_styleSchema);
const cw_sector = mongoose.model('cw_sector', cw_sectorSchema);
const ew_sector = mongoose.model('ew_sector', ew_sectorSchema);
const sc_sector = mongoose.model('sc_sector', sc_sectorSchema);*/
const materialsb = mongoose.model('materialsb', materialsbSchema);
const consumer_staplesb = mongoose.model('consumer_staplesb', consumer_staplesbSchema);
const consumer_discretionaryb = mongoose.model('consumer_discretionaryb', consumer_discretionarybSchema);
const energyb = mongoose.model('energyb', energybSchema);
const financialsb = mongoose.model('financialsb', financialsbSchema);
const health_careb = mongoose.model('health_careb', health_carebSchema);
const industrialsb = mongoose.model('industrialsb', industrialsbSchema);
const real_estateb = mongoose.model('real_estateb', real_estatebSchema);
const information_technologyb = mongoose.model('information_technologyb', information_technologybSchema);
const communication_servicesb = mongoose.model('communication_servicesb', communication_servicesbSchema);
const utilitiesb = mongoose.model('utilitiesb', utilitiesbSchema);


module.exports = {/*world,
  intermarket,
  size_style,
  cw_sector,
  ew_sector,
  sc_sector,*/
  materialsb,
  consumer_staplesb,
  consumer_discretionaryb,
  energyb,
  financialsb,
  health_careb,
  industrialsb,
  real_estateb,
  information_technologyb,
  communication_servicesb,
  utilitiesb
  }
