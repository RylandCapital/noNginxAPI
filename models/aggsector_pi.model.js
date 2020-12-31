const mongoose = require('mongoose');
const { send } = require('process');
const Schema = mongoose.Schema;


//these endpoints are for tradingview charts 

//Sectors

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



//GROUPS

const automobilescomponentsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'automobilescomponents'
});

const banksSchema = new Schema({
}, {
  timestamps: true,
  collection: 'banks'
});

const capitalgoodsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'capitalgoods'
});

const commercialprofessionalservicesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'commercialprofessionalservices'
});

const communicationservicesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'communicationservices'
});

const consumerdurablesapparelSchema = new Schema({
}, {
  timestamps: true,
  collection: 'consumerdurablesapparel'
});

const consumerservicesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'consumerservices'
});

const diversifiedfinancialsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'diversifiedfinancials'
});

const energygroupSchema = new Schema({
}, {
  timestamps: true,
  collection: 'energygroup'
});

const foodstaplesretailingSchema = new Schema({
}, {
  timestamps: true,
  collection: 'foodstaplesretailing'
});

const foodbeveragetobaccoSchema = new Schema({
}, {
  timestamps: true,
  collection: 'foodbeveragetobacco'
});

const healthcareequipmentservicesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'healthcareequipmentservices'
});

const householdpersonalproductsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'householdpersonalproducts'
});

const insuranceSchema = new Schema({
}, {
  timestamps: true,
  collection: 'insurance'
});

const materialsgroupSchema = new Schema({
}, {
  timestamps: true,
  collection: 'materialsgroup'
});

const mediaSchema = new Schema({
}, {
  timestamps: true,
  collection: 'media'
});

const mediaentertainmentSchema = new Schema({
}, {
  timestamps: true,
  collection: 'mediaentertainment'
});

const pharmaceuticalsbiotechnologylifesciencesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'pharmaceuticalsbiotechnologylifesciences'
});

const realestategroupSchema = new Schema({
}, {
  timestamps: true,
  collection: 'realestategroup'
});

const retailingSchema = new Schema({
}, {
  timestamps: true,
  collection: 'retailing'
});

const semiconductorssemiconductorequipmentSchema = new Schema({
}, {
  timestamps: true,
  collection: 'semiconductorssemiconductorequipment'
});

const softwareservicesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'softwareservices'
});


const technologyhardwareequipmentSchema = new Schema({
}, {
  timestamps: true,
  collection: 'technologyhardwareequipment'
});

const transportationSchema = new Schema({
}, {
  timestamps: true,
  collection: 'transportation'
});

const utilitiesgroupSchema = new Schema({
}, {
  timestamps: true,
  collection: 'utilitiesgroup'
});



//Sectors
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


//Groups
const automobilescomponents  = mongoose.model('automobilescomponents', automobilescomponentsSchema);
const banks  = mongoose.model('banks', banksSchema);
const capitalgoods  = mongoose.model('capitalgoods', capitalgoodsSchema);
const commercialprofessionalservices  = mongoose.model('commercialprofessionalservices', commercialprofessionalservicesSchema);
const communicationservices  = mongoose.model('communicationservices', communicationservicesSchema);
const consumerdurablesapparel  = mongoose.model('consumerdurablesapparel', consumerdurablesapparelSchema);
const consumerservices  = mongoose.model('consumerservices', consumerservicesSchema);
const diversifiedfinancials  = mongoose.model('diversifiedfinancials', diversifiedfinancialsSchema);
const energygroup  = mongoose.model('energygroup', energygroupSchema);
const foodstaplesretailing  = mongoose.model('foodstaplesretailing', foodstaplesretailingSchema);
const foodbeveragetobacco  = mongoose.model('foodbeveragetobacco', foodbeveragetobaccoSchema);
const healthcareequipmentservices  = mongoose.model('healthcareequipmentservices', healthcareequipmentservicesSchema);
const householdpersonalproducts  = mongoose.model('householdpersonalproducts', householdpersonalproductsSchema);
const insurance  = mongoose.model('insurance', insuranceSchema);
const materialsgroup  = mongoose.model('materialsgroup', materialsgroupSchema);
const media  = mongoose.model('media', mediaSchema);
const mediaentertainment  = mongoose.model('mediaentertainment', mediaentertainmentSchema);
const pharmaceuticalsbiotechnologylifesciences  = mongoose.model('pharmaceuticalsbiotechnologylifesciences', pharmaceuticalsbiotechnologylifesciencesSchema);
const realestategroup  = mongoose.model('realestategroup', realestategroupSchema);
const retailing  = mongoose.model('retailing', retailingSchema);
const semiconductorssemiconductorequipment  = mongoose.model('semiconductorssemiconductorequipment', semiconductorssemiconductorequipmentSchema);
const softwareservices  = mongoose.model('softwareservices', softwareservicesSchema);
const technologyhardwareequipment  = mongoose.model('technologyhardwareequipment', technologyhardwareequipmentSchema);
const transportation  = mongoose.model('transportation', transportationSchema);
const utilitiesgroup  = mongoose.model('utilitiesgroup', utilitiesgroupSchema);



module.exports = {
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
  utilities_chart,
  automobilescomponents,
  banks,
  capitalgoods,
  commercialprofessionalservices,
  communicationservices,
  consumerdurablesapparel,
  consumerservices,
  diversifiedfinancials,
  energygroup,
  foodstaplesretailing,
  foodbeveragetobacco,
  healthcareequipmentservices,
  householdpersonalproducts,
  insurance,
  materialsgroup,
  media,
  mediaentertainment,
  pharmaceuticalsbiotechnologylifesciences,
  realestategroup,
  retailing,
  semiconductorssemiconductorequipment,
  softwareservices,
  technologyhardwareequipment,
  transportation,
  utilitiesgroup
}
