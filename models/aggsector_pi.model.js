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

//UNIVERSE
const universeSchema = new Schema({
}, {
  timestamps: true,
  collection: 'universe_chart'
});

const qqqSchema = new Schema({
}, {
  timestamps: true,
  collection: 'qqqcfg_chart'
});

const spySchema = new Schema({
}, {
  timestamps: true,
  collection: 'spycfg_chart'
});

const iwmSchema = new Schema({
}, {
  timestamps: true,
  collection: 'iwmcfg_chart'
});


//GROUPS
const interactivemediaentertainmentSchema = new Schema({}, {timestamps: true, collection:'interactivemediaentertainment'});
const telecomSchema = new Schema({}, {timestamps: true, collection:'telecom'});
const mediaentertainmentSchema = new Schema({}, {timestamps: true, collection:'mediaentertainment'});
const apparelluxurygoodsSchema = new Schema({}, {timestamps: true, collection:'apparelluxurygoods'});
const automobileSchema = new Schema({}, {timestamps: true, collection:'automobile'});
const hotelrestaurantleisureSchema = new Schema({}, {timestamps: true, collection:'hotelrestaurantleisure'});
const householddurablesSchema = new Schema({}, {timestamps: true, collection:'householddurables'});
const internetdirectmarketingSchema = new Schema({}, {timestamps: true, collection:'internetdirectmarketing'});
const leisuregoodsSchema = new Schema({}, {timestamps: true, collection:'leisuregoods'});
const retailSchema = new Schema({}, {timestamps: true, collection:'retail'});
const foodbeveragetobaccoSchema = new Schema({}, {timestamps: true, collection:'foodbeveragetobacco'});
const foodstaplesretailingSchema = new Schema({}, {timestamps: true, collection:'foodstaplesretailing'});
const householdpersonalproductsSchema = new Schema({}, {timestamps: true, collection:'householdpersonalproducts'});
const oilgasconsumablefuelsSchema = new Schema({}, {timestamps: true, collection:'oilgasconsumablefuels'});
const oilgasequipmentservicesSchema = new Schema({}, {timestamps: true, collection:'oilgasequipmentservices'});
const oilgasexplorationproductionSchema = new Schema({}, {timestamps: true, collection:'oilgasexplorationproduction'});
const oilgasstoragetransportationSchema = new Schema({}, {timestamps: true, collection:'oilgasstoragetransportation'});
const banksSchema = new Schema({}, {timestamps: true, collection:'banks'});
const brokeragecapitalmarketsSchema = new Schema({}, {timestamps: true, collection:'brokeragecapitalmarkets'});
const diversifiedfinancialcreditservicesSchema = new Schema({}, {timestamps: true, collection:'diversifiedfinancialcreditservices'});
const insuranceSchema = new Schema({}, {timestamps: true, collection:'insurance'});
const regionalbanksSchema = new Schema({}, {timestamps: true, collection:'regionalbanks'});
const thriftsmortgagefinanceSchema = new Schema({}, {timestamps: true, collection:'thriftsmortgagefinance'});
const biotechnologySchema = new Schema({}, {timestamps: true, collection:'biotechnology'});
const healthcareservicesSchema = new Schema({}, {timestamps: true, collection:'healthcareservices'});
const medicalequipmentdevicessuppliesSchema = new Schema({}, {timestamps: true, collection:'medicalequipmentdevicessupplies'});
const pharmaceuticalsSchema = new Schema({}, {timestamps: true, collection:'pharmaceuticals'});
const aerospacedefenseSchema = new Schema({}, {timestamps: true, collection:'aerospacedefense'});
const commercialprofessionalservicesSchema = new Schema({}, {timestamps: true, collection:'commercialprofessionalservices'});
const constructionmaterialsSchema = new Schema({}, {timestamps: true, collection:'constructionmaterials'});
const industrialgoodsSchema = new Schema({}, {timestamps: true, collection:'industrialgoods'});
const machinerySchema = new Schema({}, {timestamps: true, collection:'machinery'});
const transportationSchema = new Schema({}, {timestamps: true, collection:'transportation'});
const hardwareequipmentSchema = new Schema({}, {timestamps: true, collection:'hardwareequipment'});
const itservicesSchema = new Schema({}, {timestamps: true, collection:'itservices'});
const semiconductorsSchema = new Schema({}, {timestamps: true, collection:'semiconductors'});
const softwareSchema = new Schema({}, {timestamps: true, collection:'software'});
const basicmaterialsSchema = new Schema({}, {timestamps: true, collection:'basicmaterials'});
const industrialmetalsSchema = new Schema({}, {timestamps: true, collection:'industrialmetals'});
const preciousmetalsSchema = new Schema({}, {timestamps: true, collection:'preciousmetals'});
const commercialreitsSchema = new Schema({}, {timestamps: true, collection:'commercialreits'});
const realestateservicesSchema = new Schema({}, {timestamps: true, collection:'realestateservices'});
const residentialmortgagesSchema = new Schema({}, {timestamps: true, collection:'residentialmortgages'});
const retailreitsSchema = new Schema({}, {timestamps: true, collection:'retailreits'});
const electricSchema = new Schema({}, {timestamps: true, collection:'electric'});
const gasSchema = new Schema({}, {timestamps: true, collection:'gas'});
const independentpowerrenewablesSchema = new Schema({}, {timestamps: true, collection:'independentpowerrenewables'});
const multilineutilitiesSchema = new Schema({}, {timestamps: true, collection:'multilineutilities'});
const waterSchema = new Schema({}, {timestamps: true, collection:'water'});






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

//Universe
const universe_chart  = mongoose.model('universe_chart', universeSchema);
const qqq_chartcfg  = mongoose.model('qqq_chart', qqqSchema);
const spy_chartcfg  = mongoose.model('spy_chart', spySchema);
const iwm_chartcfg  = mongoose.model('iwm_chart', iwmSchema);


//Groups
const interactivemediaentertainment  = mongoose.model('interactivemediaentertainment', interactivemediaentertainmentSchema);
const telecom  = mongoose.model('telecom', telecomSchema);
const mediaentertainment  = mongoose.model('mediaentertainment', mediaentertainmentSchema);
const apparelluxurygoods  = mongoose.model('apparelluxurygoods', apparelluxurygoodsSchema);
const automobile  = mongoose.model('automobile', automobileSchema);
const hotelrestaurantleisure  = mongoose.model('hotelrestaurantleisure', hotelrestaurantleisureSchema);
const householddurables  = mongoose.model('householddurables', householddurablesSchema);
const internetdirectmarketing  = mongoose.model('internetdirectmarketing', internetdirectmarketingSchema);
const leisuregoods  = mongoose.model('leisuregoods', leisuregoodsSchema);
const retail  = mongoose.model('retail', retailSchema);
const foodbeveragetobacco  = mongoose.model('foodbeveragetobacco', foodbeveragetobaccoSchema);
const foodstaplesretailing  = mongoose.model('foodstaplesretailing', foodstaplesretailingSchema);
const householdpersonalproducts  = mongoose.model('householdpersonalproducts', householdpersonalproductsSchema);
const oilgasconsumablefuels  = mongoose.model('oilgasconsumablefuels', oilgasconsumablefuelsSchema);
const oilgasequipmentservices  = mongoose.model('oilgasequipmentservices', oilgasequipmentservicesSchema);
const oilgasexplorationproduction  = mongoose.model('oilgasexplorationproduction', oilgasexplorationproductionSchema);
const oilgasstoragetransportation  = mongoose.model('oilgasstoragetransportation', oilgasstoragetransportationSchema);
const banks  = mongoose.model('banks', banksSchema);
const brokeragecapitalmarkets  = mongoose.model('brokeragecapitalmarkets', brokeragecapitalmarketsSchema);
const diversifiedfinancialcreditservices  = mongoose.model('diversifiedfinancialcreditservices', diversifiedfinancialcreditservicesSchema);
const insurance  = mongoose.model('insurance', insuranceSchema);
const regionalbanks  = mongoose.model('regionalbanks', regionalbanksSchema);
const thriftsmortgagefinance  = mongoose.model('thriftsmortgagefinance', thriftsmortgagefinanceSchema);
const biotechnology  = mongoose.model('biotechnology', biotechnologySchema);
const healthcareservices  = mongoose.model('healthcareservices', healthcareservicesSchema);
const medicalequipmentdevicessupplies  = mongoose.model('medicalequipmentdevicessupplies', medicalequipmentdevicessuppliesSchema);
const pharmaceuticals  = mongoose.model('pharmaceuticals', pharmaceuticalsSchema);
const aerospacedefense  = mongoose.model('aerospacedefense', aerospacedefenseSchema);
const commercialprofessionalservices  = mongoose.model('commercialprofessionalservices', commercialprofessionalservicesSchema);
const constructionmaterials  = mongoose.model('constructionmaterials', constructionmaterialsSchema);
const industrialgoods  = mongoose.model('industrialgoods', industrialgoodsSchema);
const machinery  = mongoose.model('machinery', machinerySchema);
const transportation  = mongoose.model('transportation', transportationSchema);
const hardwareequipment  = mongoose.model('hardwareequipment', hardwareequipmentSchema);
const itservices  = mongoose.model('itservices', itservicesSchema);
const semiconductors  = mongoose.model('semiconductors', semiconductorsSchema);
const software  = mongoose.model('software', softwareSchema);
const basicmaterials  = mongoose.model('basicmaterials', basicmaterialsSchema);
const industrialmetals  = mongoose.model('industrialmetals', industrialmetalsSchema);
const preciousmetals  = mongoose.model('preciousmetals', preciousmetalsSchema);
const commercialreits  = mongoose.model('commercialreits', commercialreitsSchema);
const realestateservices  = mongoose.model('realestateservices', realestateservicesSchema);
const residentialmortgages  = mongoose.model('residentialmortgages', residentialmortgagesSchema);
const retailreits  = mongoose.model('retailreits', retailreitsSchema);
const electric  = mongoose.model('electric', electricSchema);
const gas  = mongoose.model('gas', gasSchema);
const independentpowerrenewables  = mongoose.model('independentpowerrenewables', independentpowerrenewablesSchema);
const multilineutilities  = mongoose.model('multilineutilities', multilineutilitiesSchema);
const water  = mongoose.model('water', waterSchema);


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
  universe_chart,
  qqq_chartcfg,
  spy_chartcfg,
  iwm_chartcfg,
  interactivemediaentertainment,
  telecom,
  mediaentertainment,
  apparelluxurygoods,
  automobile,
  hotelrestaurantleisure,
  householddurables,
  internetdirectmarketing,
  leisuregoods,
  retail,
  foodbeveragetobacco,
  foodstaplesretailing,
  householdpersonalproducts,
  oilgasconsumablefuels,
  oilgasequipmentservices,
  oilgasexplorationproduction,
  oilgasstoragetransportation,
  banks,
  brokeragecapitalmarkets,
  diversifiedfinancialcreditservices,
  insurance,
  regionalbanks,
  thriftsmortgagefinance,
  biotechnology,
  healthcareservices,
  medicalequipmentdevicessupplies,
  pharmaceuticals,
  aerospacedefense,
  commercialprofessionalservices,
  constructionmaterials,
  industrialgoods,
  machinery,
  transportation,
  hardwareequipment,
  itservices,
  semiconductors,
  software,
  basicmaterials,
  industrialmetals,
  preciousmetals,
  commercialreits,
  realestateservices,
  residentialmortgages,
  retailreits,
  electric,
  gas,
  independentpowerrenewables,
  multilineutilities,
  water
  
}

