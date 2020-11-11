const mongoose = require('mongoose');
const { send } = require('process');
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
});*/

const materialsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'materials_chart'
});

const consumer_staplesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'consumer_staples_chart'
});

const consumer_discretionarySchema = new Schema({
}, {
  timestamps: true,
  collection: 'consumer_discretionary_chart'
});

const energySchema = new Schema({
}, {
  timestamps: true,
  collection: 'energy_chart'
});

const financialsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'financials_chart'
});

const health_careSchema = new Schema({
}, {
  timestamps: true,
  collection: 'health_care_chart'
});

const industrialsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'industrials_chart'
});

const real_estateSchema = new Schema({
}, {
  timestamps: true,
  collection: 'real_estate_chart'
});

const information_technologySchema = new Schema({
}, {
  timestamps: true,
  collection: 'information_technology_chart'
});

const communication_servicesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'communication_services_chart'
});

const utilitiesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'utilities_chart'
});


/*const world = mongoose.model('world', worldSchema);
const intermarket = mongoose.model('intermarket', intermarketSchema);
const size_style = mongoose.model('size_style', size_styleSchema);
const cw_sector = mongoose.model('cw_sector', cw_sectorSchema);
const ew_sector = mongoose.model('ew_sector', ew_sectorSchema);
const sc_sector = mongoose.model('sc_sector', sc_sectorSchema);*/
const materials_chart = mongoose.model('materials_chart', materialsSchema);
const consumer_staples_chart  = mongoose.model('consumer_staples_chart', consumer_staplesSchema);
const consumer_discretionary_chart  = mongoose.model('consumer_discretionary_chart', consumer_discretionarySchema);
const energy_chart  = mongoose.model('energy_chart', energySchema);
const financials_chart  = mongoose.model('financials_chart', financialsSchema);
const health_care_chart  = mongoose.model('health_care_chart', health_careSchema);
const industrials_chart  = mongoose.model('industrials_chart', industrialsSchema);
const real_estate_chart  = mongoose.model('real_estate_chart', real_estateSchema);
const information_technology_chart  = mongoose.model('information_technology_chart', information_technologySchema);
const communication_services_chart  = mongoose.model('communication_services_chart', communication_servicesSchema);
const utilities_chart  = mongoose.model('utilities_chart', utilitiesSchema);


module.exports = {/*world,
  intermarket,
  size_style,
  cw_sector,
  ew_sector,
  sc_sector,*/
  materials_chart ,
  consumer_staples_chart ,
  consumer_discretionary_chart ,
  energy_chart ,
  financials_chart ,
  health_care_chart ,
  industrials_chart ,
  real_estate_chart ,
  information_technology_chart ,
  communication_services_chart ,
  utilities_chart 
}
