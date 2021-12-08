const mongoose = require('mongoose');
const { send } = require('process');
const Schema = mongoose.Schema;


// these are AGgrid 1 for the sectors with their ETFs as ROWS
const worldSchema = new Schema({
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
});

const materialsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'materials'
});

const consumer_staplesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'consumer_staples'
});

const consumer_discretionarySchema = new Schema({
}, {
  timestamps: true,
  collection: 'consumer_discretionary'
});

const energySchema = new Schema({
}, {
  timestamps: true,
  collection: 'energy'
});

const financialsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'financials'
});

const health_careSchema = new Schema({
}, {
  timestamps: true,
  collection: 'health_care'
});

const industrialsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'industrials'
});

const real_estateSchema = new Schema({
}, {
  timestamps: true,
  collection: 'real_estate'
});

const information_technologySchema = new Schema({
}, {
  timestamps: true,
  collection: 'information_technology'
});

const communication_servicesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'communication_services'
});

const utilitiesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'utilities'
});

const bondsizestyleSchema = new Schema({
}, {
  timestamps: true,
  collection: 'bond_size_style'
});

const commoditiesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'commodities'
});

const currencySchema = new Schema({
}, {
  timestamps: true,
  collection: 'currency'
});

const esgSchema = new Schema({
}, {
  timestamps: true,
  collection: 'esg'
});

const extendedSchema = new Schema({
}, {
  timestamps: true,
  collection: 'extended'
});

const alternativeSchema = new Schema({
}, {
  timestamps: true,
  collection: 'alternative'
});

const largegrvalSchema = new Schema({
}, {
  timestamps: true,
  collection: 'large_gr_val'
});

const midgrvalSchema = new Schema({
}, {
  timestamps: true,
  collection: 'mid_gr_val'
});

const smallgrvalueSchema = new Schema({
}, {
  timestamps: true,
  collection: 'small_gr_val'
});

const socialresponseSchema = new Schema({
}, {
  timestamps: true,
  collection: 'social_response'
});

const cryptoSchema = new Schema({
}, {
  timestamps: true,
  collection: 'crypto'
});

const longshortSchema = new Schema({
}, {
  timestamps: true,
  collection: 'longshort'
});






const world = mongoose.model('world', worldSchema);
const intermarket = mongoose.model('intermarket', intermarketSchema);
const size_style = mongoose.model('size_style', size_styleSchema);
const cw_sector = mongoose.model('cw_sector', cw_sectorSchema);
const ew_sector = mongoose.model('ew_sector', ew_sectorSchema);
const sc_sector = mongoose.model('sc_sector', sc_sectorSchema);
const materials = mongoose.model('materials', materialsSchema);
const consumer_staples = mongoose.model('consumer_staples', consumer_staplesSchema);
const consumer_discretionary = mongoose.model('consumer_discretionary', consumer_discretionarySchema);
const energy = mongoose.model('energy', energySchema);
const financials = mongoose.model('financials', financialsSchema);
const health_care = mongoose.model('health_care', health_careSchema);
const industrials = mongoose.model('industrials', industrialsSchema);
const real_estate = mongoose.model('real_estate', real_estateSchema);
const information_technology = mongoose.model('information_technology', information_technologySchema);
const communication_services = mongoose.model('communication_services', communication_servicesSchema);
const utilities = mongoose.model('utilities', utilitiesSchema);


const bondsizestyle = mongoose.model('bondsizestyle', bondsizestyleSchema);
const currency = mongoose.model('currency', currencySchema);
const commodities = mongoose.model('commodities', commoditiesSchema);
const esg = mongoose.model('esg', esgSchema);
const extended = mongoose.model('extended', extendedSchema);
const alternative = mongoose.model('alternative', alternativeSchema);
const largegrval = mongoose.model('largegrval', largegrvalSchema);
const midgrval = mongoose.model('midgrval', midgrvalSchema);
const smallgrvalue = mongoose.model('smallgrvalue', smallgrvalueSchema);
const socialresponse = mongoose.model('socialresponse', socialresponseSchema);
const crypto = mongoose.model('crypto', cryptoSchema);
const longshort = mongoose.model('longshort', longshortSchema);



module.exports = {world,
  intermarket,
  size_style,
  cw_sector,
  ew_sector,
  sc_sector,
  materials,
  consumer_staples,
  consumer_discretionary,
  energy,
  financials,
  health_care,
  industrials,
  real_estate,
  information_technology,
  communication_services,
  utilities,
  bondsizestyle, 
  currency,
  commodities,
  esg,
  extended,
  alternative,
  largegrval,
  midgrval,
  smallgrvalue,
  socialresponse,
  crypto,
  longshort}