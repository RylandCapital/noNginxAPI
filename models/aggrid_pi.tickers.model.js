const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//these endpoints are for aggrid 1Bs (tickers not ETFS)
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

const automobilescomponentsbSchema = new Schema({}, {timestamps: true, collection: 'automobilescomponentsb'});
const banksbSchema = new Schema({}, {timestamps: true, collection: 'banksb'});
const capitalgoodsbSchema = new Schema({}, {timestamps: true, collection: 'capitalgoodsb'});
const commercialprofessionalservicesbSchema = new Schema({}, {timestamps: true, collection: 'commercialprofessionalservicesb'});
const communicationservicesbSchema = new Schema({}, {timestamps: true, collection: 'communicationservicesb'});
const consumerdurablesapparelbSchema = new Schema({}, {timestamps: true, collection: 'consumerdurablesapparelb'});
const consumerservicesbSchema = new Schema({}, {timestamps: true, collection: 'consumerservicesb'});
const diversifiedfinancialsbSchema = new Schema({}, {timestamps: true, collection: 'diversifiedfinancialsb'});
const energygroupbSchema = new Schema({}, {timestamps: true, collection: 'energygroupb'});
const foodstaplesretailingbSchema = new Schema({}, {timestamps: true, collection: 'foodstaplesretailingb'});
const foodbeveragetobaccobSchema = new Schema({}, {timestamps: true, collection: 'foodbeveragetobaccob'});
const healthcareequipmentservicesbSchema = new Schema({}, {timestamps: true, collection: 'healthcareequipmentservicesb'});
const householdpersonalproductsbSchema = new Schema({}, {timestamps: true, collection: 'householdpersonalproductsb'});
const insurancebSchema = new Schema({}, {timestamps: true, collection: 'insuranceb'});
const materialsgroupbSchema = new Schema({}, {timestamps: true, collection: 'materialsgroupb'});
const mediabSchema = new Schema({}, {timestamps: true, collection: 'mediab'});
const mediaentertainmentbSchema = new Schema({}, {timestamps: true, collection: 'mediaentertainmentb'});
const pharmaceuticalsbiotechnologylifesciencesbSchema = new Schema({}, {timestamps: true, collection: 'pharmaceuticalsbiotechnologylifesciencesb'});
const realestategroupbSchema = new Schema({}, {timestamps: true, collection: 'realestategroupb'});
const retailingbSchema = new Schema({}, {timestamps: true, collection: 'retailingb'});
const semiconductorssemiconductorequipmentbSchema = new Schema({}, {timestamps: true, collection: 'semiconductorssemiconductorequipmentb'});
const softwareservicesbSchema = new Schema({}, {timestamps: true, collection: 'softwareservicesb'});
const technologyhardwareequipmentbSchema = new Schema({}, {timestamps: true, collection: 'technologyhardwareequipmentb'});
const transportationbSchema = new Schema({}, {timestamps: true, collection: 'transportationb'});
const utilitiesgroupbSchema = new Schema({}, {timestamps: true, collection: 'utilitiesgroupb'});





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
const automobilescomponentsb  = mongoose.model('automobilescomponentsb', automobilescomponentsbSchema);
const banksb  = mongoose.model('banksb', banksbSchema);
const capitalgoodsb  = mongoose.model('capitalgoodsb', capitalgoodsbSchema);
const commercialprofessionalservicesb  = mongoose.model('commercialprofessionalservicesb', commercialprofessionalservicesbSchema);
const communicationservicesb  = mongoose.model('communicationservicesb', communicationservicesbSchema);
const consumerdurablesapparelb  = mongoose.model('consumerdurablesapparelb', consumerdurablesapparelbSchema);
const consumerservicesb  = mongoose.model('consumerservicesb', consumerservicesbSchema);
const diversifiedfinancialsb  = mongoose.model('diversifiedfinancialsb', diversifiedfinancialsbSchema);
const energygroupb  = mongoose.model('energygroupb', energygroupbSchema);
const foodstaplesretailingb  = mongoose.model('foodstaplesretailingb', foodstaplesretailingbSchema);
const foodbeveragetobaccob  = mongoose.model('foodbeveragetobaccob', foodbeveragetobaccobSchema);
const healthcareequipmentservicesb  = mongoose.model('healthcareequipmentservicesb', healthcareequipmentservicesbSchema);
const householdpersonalproductsb  = mongoose.model('householdpersonalproductsb', householdpersonalproductsbSchema);
const insuranceb  = mongoose.model('insuranceb', insurancebSchema);
const materialsgroupb  = mongoose.model('materialsgroupb', materialsgroupbSchema);
const mediab  = mongoose.model('mediab', mediabSchema);
const mediaentertainmentb  = mongoose.model('mediaentertainmentb', mediaentertainmentbSchema);
const pharmaceuticalsbiotechnologylifesciencesb  = mongoose.model('pharmaceuticalsbiotechnologylifesciencesb', pharmaceuticalsbiotechnologylifesciencesbSchema);
const realestategroupb  = mongoose.model('realestategroupb', realestategroupbSchema);
const retailingb  = mongoose.model('retailingb', retailingbSchema);
const semiconductorssemiconductorequipmentb  = mongoose.model('semiconductorssemiconductorequipmentb', semiconductorssemiconductorequipmentbSchema);
const softwareservicesb  = mongoose.model('softwareservicesb', softwareservicesbSchema);
const technologyhardwareequipmentb  = mongoose.model('technologyhardwareequipmentb', technologyhardwareequipmentbSchema);
const transportationb  = mongoose.model('transportationb', transportationbSchema);
const utilitiesgroupb  = mongoose.model('utilitiesgroupb', utilitiesgroupbSchema);


module.exports = {
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
  utilitiesb,
  automobilescomponentsb,
  banksb,
  capitalgoodsb,
  commercialprofessionalservicesb,
  communicationservicesb,
  consumerdurablesapparelb,
  consumerservicesb,
  diversifiedfinancialsb,
  energygroupb,
  foodstaplesretailingb,
  foodbeveragetobaccob,
  healthcareequipmentservicesb,
  householdpersonalproductsb,
  insuranceb,
  materialsgroupb,
  mediab,
  mediaentertainmentb,
  pharmaceuticalsbiotechnologylifesciencesb,
  realestategroupb,
  retailingb,
  semiconductorssemiconductorequipmentb,
  softwareservicesb,
  technologyhardwareequipmentb,
  transportationb,
  utilitiesgroupb
  }
