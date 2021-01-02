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


const interactivemediaentertainmentbSchema = new Schema({}, {timestamps: true, collection:'interactivemediaentertainmentb'});
const telecombSchema = new Schema({}, {timestamps: true, collection:'telecomb'});
const mediaentertainmentbSchema = new Schema({}, {timestamps: true, collection:'mediaentertainmentb'});
const apparelluxurygoodsbSchema = new Schema({}, {timestamps: true, collection:'apparelluxurygoodsb'});
const automobilebSchema = new Schema({}, {timestamps: true, collection:'automobileb'});
const hotelrestaurantleisurebSchema = new Schema({}, {timestamps: true, collection:'hotelrestaurantleisureb'});
const householddurablesbSchema = new Schema({}, {timestamps: true, collection:'householddurablesb'});
const internetdirectmarketingbSchema = new Schema({}, {timestamps: true, collection:'internetdirectmarketingb'});
const leisuregoodsbSchema = new Schema({}, {timestamps: true, collection:'leisuregoodsb'});
const retailbSchema = new Schema({}, {timestamps: true, collection:'retailb'});
const foodbeveragetobaccobSchema = new Schema({}, {timestamps: true, collection:'foodbeveragetobaccob'});
const foodstaplesretailingbSchema = new Schema({}, {timestamps: true, collection:'foodstaplesretailingb'});
const householdpersonalproductsbSchema = new Schema({}, {timestamps: true, collection:'householdpersonalproductsb'});
const oilgasconsumablefuelsbSchema = new Schema({}, {timestamps: true, collection:'oilgasconsumablefuelsb'});
const oilgasequipmentservicesbSchema = new Schema({}, {timestamps: true, collection:'oilgasequipmentservicesb'});
const oilgasexplorationproductionbSchema = new Schema({}, {timestamps: true, collection:'oilgasexplorationproductionb'});
const oilgasstoragetransportationbSchema = new Schema({}, {timestamps: true, collection:'oilgasstoragetransportationb'});
const banksbSchema = new Schema({}, {timestamps: true, collection:'banksb'});
const brokeragecapitalmarketsbSchema = new Schema({}, {timestamps: true, collection:'brokeragecapitalmarketsb'});
const diversifiedfinancialcreditservicesbSchema = new Schema({}, {timestamps: true, collection:'diversifiedfinancialcreditservicesb'});
const insurancebSchema = new Schema({}, {timestamps: true, collection:'insuranceb'});
const regionalbanksbSchema = new Schema({}, {timestamps: true, collection:'regionalbanksb'});
const thriftsmortgagefinancebSchema = new Schema({}, {timestamps: true, collection:'thriftsmortgagefinanceb'});
const biotechnologybSchema = new Schema({}, {timestamps: true, collection:'biotechnologyb'});
const healthcareservicesbSchema = new Schema({}, {timestamps: true, collection:'healthcareservicesb'});
const medicalequipmentdevicessuppliesbSchema = new Schema({}, {timestamps: true, collection:'medicalequipmentdevicessuppliesb'});
const pharmaceuticalsbSchema = new Schema({}, {timestamps: true, collection:'pharmaceuticalsb'});
const aerospacedefensebSchema = new Schema({}, {timestamps: true, collection:'aerospacedefenseb'});
const commercialprofessionalservicesbSchema = new Schema({}, {timestamps: true, collection:'commercialprofessionalservicesb'});
const constructionmaterialsbSchema = new Schema({}, {timestamps: true, collection:'constructionmaterialsb'});
const industrialgoodsbSchema = new Schema({}, {timestamps: true, collection:'industrialgoodsb'});
const machinerybSchema = new Schema({}, {timestamps: true, collection:'machineryb'});
const transportationbSchema = new Schema({}, {timestamps: true, collection:'transportationb'});
const hardwareequipmentbSchema = new Schema({}, {timestamps: true, collection:'hardwareequipmentb'});
const itservicesbSchema = new Schema({}, {timestamps: true, collection:'itservicesb'});
const semiconductorsbSchema = new Schema({}, {timestamps: true, collection:'semiconductorsb'});
const softwarebSchema = new Schema({}, {timestamps: true, collection:'softwareb'});
const basicmaterialsbSchema = new Schema({}, {timestamps: true, collection:'basicmaterialsb'});
const industrialmetalsbSchema = new Schema({}, {timestamps: true, collection:'industrialmetalsb'});
const preciousmetalsbSchema = new Schema({}, {timestamps: true, collection:'preciousmetalsb'});
const commercialreitsbSchema = new Schema({}, {timestamps: true, collection:'commercialreitsb'});
const realestateservicesbSchema = new Schema({}, {timestamps: true, collection:'realestateservicesb'});
const residentialmortgagesbSchema = new Schema({}, {timestamps: true, collection:'residentialmortgagesb'});
const retailreitsbSchema = new Schema({}, {timestamps: true, collection:'retailreitsb'});
const electricbSchema = new Schema({}, {timestamps: true, collection:'electricb'});
const gasbSchema = new Schema({}, {timestamps: true, collection:'gasb'});
const independentpowerrenewablesbSchema = new Schema({}, {timestamps: true, collection:'independentpowerrenewablesb'});
const multilineutilitiesbSchema = new Schema({}, {timestamps: true, collection:'multilineutilitiesb'});
const waterbSchema = new Schema({}, {timestamps: true, collection:'waterb'});




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



const interactivemediaentertainmentb  = mongoose.model('interactivemediaentertainmentb', interactivemediaentertainmentbSchema);
const telecomb  = mongoose.model('telecomb', telecombSchema);
const mediaentertainmentb  = mongoose.model('mediaentertainmentb', mediaentertainmentbSchema);
const apparelluxurygoodsb  = mongoose.model('apparelluxurygoodsb', apparelluxurygoodsbSchema);
const automobileb  = mongoose.model('automobileb', automobilebSchema);
const hotelrestaurantleisureb  = mongoose.model('hotelrestaurantleisureb', hotelrestaurantleisurebSchema);
const householddurablesb  = mongoose.model('householddurablesb', householddurablesbSchema);
const internetdirectmarketingb  = mongoose.model('internetdirectmarketingb', internetdirectmarketingbSchema);
const leisuregoodsb  = mongoose.model('leisuregoodsb', leisuregoodsbSchema);
const retailb  = mongoose.model('retailb', retailbSchema);
const foodbeveragetobaccob  = mongoose.model('foodbeveragetobaccob', foodbeveragetobaccobSchema);
const foodstaplesretailingb  = mongoose.model('foodstaplesretailingb', foodstaplesretailingbSchema);
const householdpersonalproductsb  = mongoose.model('householdpersonalproductsb', householdpersonalproductsbSchema);
const oilgasconsumablefuelsb  = mongoose.model('oilgasconsumablefuelsb', oilgasconsumablefuelsbSchema);
const oilgasequipmentservicesb  = mongoose.model('oilgasequipmentservicesb', oilgasequipmentservicesbSchema);
const oilgasexplorationproductionb  = mongoose.model('oilgasexplorationproductionb', oilgasexplorationproductionbSchema);
const oilgasstoragetransportationb  = mongoose.model('oilgasstoragetransportationb', oilgasstoragetransportationbSchema);
const banksb  = mongoose.model('banksb', banksbSchema);
const brokeragecapitalmarketsb  = mongoose.model('brokeragecapitalmarketsb', brokeragecapitalmarketsbSchema);
const diversifiedfinancialcreditservicesb  = mongoose.model('diversifiedfinancialcreditservicesb', diversifiedfinancialcreditservicesbSchema);
const insuranceb  = mongoose.model('insuranceb', insurancebSchema);
const regionalbanksb  = mongoose.model('regionalbanksb', regionalbanksbSchema);
const thriftsmortgagefinanceb  = mongoose.model('thriftsmortgagefinanceb', thriftsmortgagefinancebSchema);
const biotechnologyb  = mongoose.model('biotechnologyb', biotechnologybSchema);
const healthcareservicesb  = mongoose.model('healthcareservicesb', healthcareservicesbSchema);
const medicalequipmentdevicessuppliesb  = mongoose.model('medicalequipmentdevicessuppliesb', medicalequipmentdevicessuppliesbSchema);
const pharmaceuticalsb  = mongoose.model('pharmaceuticalsb', pharmaceuticalsbSchema);
const aerospacedefenseb  = mongoose.model('aerospacedefenseb', aerospacedefensebSchema);
const commercialprofessionalservicesb  = mongoose.model('commercialprofessionalservicesb', commercialprofessionalservicesbSchema);
const constructionmaterialsb  = mongoose.model('constructionmaterialsb', constructionmaterialsbSchema);
const industrialgoodsb  = mongoose.model('industrialgoodsb', industrialgoodsbSchema);
const machineryb  = mongoose.model('machineryb', machinerybSchema);
const transportationb  = mongoose.model('transportationb', transportationbSchema);
const hardwareequipmentb  = mongoose.model('hardwareequipmentb', hardwareequipmentbSchema);
const itservicesb  = mongoose.model('itservicesb', itservicesbSchema);
const semiconductorsb  = mongoose.model('semiconductorsb', semiconductorsbSchema);
const softwareb  = mongoose.model('softwareb', softwarebSchema);
const basicmaterialsb  = mongoose.model('basicmaterialsb', basicmaterialsbSchema);
const industrialmetalsb  = mongoose.model('industrialmetalsb', industrialmetalsbSchema);
const preciousmetalsb  = mongoose.model('preciousmetalsb', preciousmetalsbSchema);
const commercialreitsb  = mongoose.model('commercialreitsb', commercialreitsbSchema);
const realestateservicesb  = mongoose.model('realestateservicesb', realestateservicesbSchema);
const residentialmortgagesb  = mongoose.model('residentialmortgagesb', residentialmortgagesbSchema);
const retailreitsb  = mongoose.model('retailreitsb', retailreitsbSchema);
const electricb  = mongoose.model('electricb', electricbSchema);
const gasb  = mongoose.model('gasb', gasbSchema);
const independentpowerrenewablesb  = mongoose.model('independentpowerrenewablesb', independentpowerrenewablesbSchema);
const multilineutilitiesb  = mongoose.model('multilineutilitiesb', multilineutilitiesbSchema);
const waterb  = mongoose.model('waterb', waterbSchema);


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
  interactivemediaentertainmentb,
  telecomb,
  mediaentertainmentb,
  apparelluxurygoodsb,
  automobileb,
  hotelrestaurantleisureb,
  householddurablesb,
  internetdirectmarketingb,
  leisuregoodsb,
  retailb,
  foodbeveragetobaccob,
  foodstaplesretailingb,
  householdpersonalproductsb,
  oilgasconsumablefuelsb,
  oilgasequipmentservicesb,
  oilgasexplorationproductionb,
  oilgasstoragetransportationb,
  banksb,
  brokeragecapitalmarketsb,
  diversifiedfinancialcreditservicesb,
  insuranceb,
  regionalbanksb,
  thriftsmortgagefinanceb,
  biotechnologyb,
  healthcareservicesb,
  medicalequipmentdevicessuppliesb,
  pharmaceuticalsb,
  aerospacedefenseb,
  commercialprofessionalservicesb,
  constructionmaterialsb,
  industrialgoodsb,
  machineryb,
  transportationb,
  hardwareequipmentb,
  itservicesb,
  semiconductorsb,
  softwareb,
  basicmaterialsb,
  industrialmetalsb,
  preciousmetalsb,
  commercialreitsb,
  realestateservicesb,
  residentialmortgagesb,
  retailreitsb,
  electricb,
  gasb,
  independentpowerrenewablesb,
  multilineutilitiesb,
  waterb,
  }
