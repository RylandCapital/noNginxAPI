const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { send } = require('process');



//these endpoints are for tradingview ratio charts, sectorsd and subsectors

//Sectors

const materialsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'materials_ratio'
});

const consumer_staplesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'consumer_staples_ratio'
});

const consumer_discretionarySchema = new Schema({
}, {
  timestamps: true,
  collection: 'consumer_discretionary_ratio'
});

const energySchema = new Schema({
}, {
  timestamps: true,
  collection: 'energy_ratio'
});

const financialsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'financials_ratio'
});

const health_careSchema = new Schema({
}, {
  timestamps: true,
  collection: 'health_care_ratio'
});

const industrialsSchema = new Schema({
}, {
  timestamps: true,
  collection: 'industrials_ratio'
});

const real_estateSchema = new Schema({
}, {
  timestamps: true,
  collection: 'real_estate_ratio'
});

const information_technologySchema = new Schema({
}, {
  timestamps: true,
  collection: 'information_technology_ratio'
});

const communication_servicesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'communication_services_ratio'
});

const utilitiesSchema = new Schema({
}, {
  timestamps: true,
  collection: 'utilities_ratio'
});


//GROUPS
const interactivemediaentertainmentSchema = new Schema({}, {timestamps: true, collection:'interactivemediaentertainment_ratio'});
const telecomSchema = new Schema({}, {timestamps: true, collection:'telecom_ratio'});
const mediaentertainmentSchema = new Schema({}, {timestamps: true, collection:'mediaentertainment_ratio'});
const apparelluxurygoodsSchema = new Schema({}, {timestamps: true, collection:'apparelluxurygoods_ratio'});
const automobileSchema = new Schema({}, {timestamps: true, collection:'automobile_ratio'});
const hotelrestaurantleisureSchema = new Schema({}, {timestamps: true, collection:'hotelrestaurantleisure_ratio'});
const householddurablesSchema = new Schema({}, {timestamps: true, collection:'householddurables_ratio'});
const internetdirectmarketingSchema = new Schema({}, {timestamps: true, collection:'internetdirectmarketing_ratio'});
const leisuregoodsSchema = new Schema({}, {timestamps: true, collection:'leisuregoods_ratio'});
const retailSchema = new Schema({}, {timestamps: true, collection:'retail'});
const foodbeveragetobaccoSchema = new Schema({}, {timestamps: true, collection:'foodbeveragetobacco_ratio'});
const foodstaplesretailingSchema = new Schema({}, {timestamps: true, collection:'foodstaplesretailing_ratio'});
const householdpersonalproductsSchema = new Schema({}, {timestamps: true, collection:'householdpersonalproducts_ratio'});
const oilgasconsumablefuelsSchema = new Schema({}, {timestamps: true, collection:'oilgasconsumablefuels_ratio'});
const oilgasequipmentservicesSchema = new Schema({}, {timestamps: true, collection:'oilgasequipmentservices_ratio'});
const oilgasexplorationproductionSchema = new Schema({}, {timestamps: true, collection:'oilgasexplorationproduction_ratio'});
const oilgasstoragetransportationSchema = new Schema({}, {timestamps: true, collection:'oilgasstoragetransportation_ratio'});
const banksSchema = new Schema({}, {timestamps: true, collection:'banks_ratio'});
const brokeragecapitalmarketsSchema = new Schema({}, {timestamps: true, collection:'brokeragecapitalmarkets_ratio'});
const diversifiedfinancialcreditservicesSchema = new Schema({}, {timestamps: true, collection:'diversifiedfinancialcreditservices_ratio'});
const insuranceSchema = new Schema({}, {timestamps: true, collection:'insurance_ratio'});
const regionalbanksSchema = new Schema({}, {timestamps: true, collection:'regionalbanks_ratio'});
const thriftsmortgagefinanceSchema = new Schema({}, {timestamps: true, collection:'thriftsmortgagefinance_ratio'});
const biotechnologySchema = new Schema({}, {timestamps: true, collection:'biotechnology_ratio'});
const healthcareservicesSchema = new Schema({}, {timestamps: true, collection:'healthcareservices_ratio'});
const medicalequipmentdevicessuppliesSchema = new Schema({}, {timestamps: true, collection:'medicalequipmentdevicessupplies_ratio'});
const pharmaceuticalsSchema = new Schema({}, {timestamps: true, collection:'pharmaceuticals_ratio'});
const aerospacedefenseSchema = new Schema({}, {timestamps: true, collection:'aerospacedefense_ratio'});
const commercialprofessionalservicesSchema = new Schema({}, {timestamps: true, collection:'commercialprofessionalservices_ratio'});
const constructionmaterialsSchema = new Schema({}, {timestamps: true, collection:'constructionmaterials_ratio'});
const industrialgoodsSchema = new Schema({}, {timestamps: true, collection:'industrialgoods_ratio'});
const machinerySchema = new Schema({}, {timestamps: true, collection:'machinery_ratio'});
const transportationSchema = new Schema({}, {timestamps: true, collection:'transportation_ratio'});
const hardwareequipmentSchema = new Schema({}, {timestamps: true, collection:'hardwareequipment_ratio'});
const itservicesSchema = new Schema({}, {timestamps: true, collection:'itservices_ratio'});
const semiconductorsSchema = new Schema({}, {timestamps: true, collection:'semiconductors_ratio'});
const softwareSchema = new Schema({}, {timestamps: true, collection:'software_ratio'});
const basicmaterialsSchema = new Schema({}, {timestamps: true, collection:'basicmaterials_ratio'});
const industrialmetalsSchema = new Schema({}, {timestamps: true, collection:'industrialmetals_ratio'});
const preciousmetalsSchema = new Schema({}, {timestamps: true, collection:'preciousmetals_ratio'});
const commercialreitsSchema = new Schema({}, {timestamps: true, collection:'commercialreits_ratio'});
const realestateservicesSchema = new Schema({}, {timestamps: true, collection:'realestateservices_ratio'});
const residentialmortgagesSchema = new Schema({}, {timestamps: true, collection:'residentialmortgages_ratio'});
const retailreitsSchema = new Schema({}, {timestamps: true, collection:'retailreits_ratio'});
const electricSchema = new Schema({}, {timestamps: true, collection:'electric_ratio'});
const gasSchema = new Schema({}, {timestamps: true, collection:'gas_ratio'});
const independentpowerrenewablesSchema = new Schema({}, {timestamps: true, collection:'independentpowerrenewables_ratio'});
const multilineutilitiesSchema = new Schema({}, {timestamps: true, collection:'multilineutilities_ratio'});
const waterSchema = new Schema({}, {timestamps: true, collection:'water_ratio'});
const chemicalsSchema = new Schema({}, {timestamps: true, collection:'chemicals_ratio'});
const diversifiedconsumerservicesSchema = new Schema({}, {timestamps: true, collection:'diversifiedconsumerservices_ratio'});





//Sectors
const materials_ratio = mongoose.model('materials_ratio', materialsSchema);
const consumer_staples_ratio  = mongoose.model('consumer_staples_ratio', consumer_staplesSchema);
const consumer_discretionary_ratio  = mongoose.model('consumer_discretionary_ratio', consumer_discretionarySchema);
const energy_ratio  = mongoose.model('energy_ratio', energySchema);
const financials_ratio  = mongoose.model('financials_ratio', financialsSchema);
const health_care_ratio  = mongoose.model('health_care_ratio', health_careSchema);
const industrials_ratio  = mongoose.model('industrials_ratio', industrialsSchema);
const real_estate_ratio  = mongoose.model('real_estate_ratio', real_estateSchema);
const information_technology_ratio  = mongoose.model('information_technology_ratio', information_technologySchema);
const communication_services_ratio  = mongoose.model('communication_services_ratio', communication_servicesSchema);
const utilities_ratio  = mongoose.model('utilities_ratio', utilitiesSchema);



//Groups
const interactivemediaentertainment  = mongoose.model('interactivemediaentertainment_ratio', interactivemediaentertainmentSchema);
const telecom  = mongoose.model('telecom_ratio', telecomSchema);
const mediaentertainment  = mongoose.model('mediaentertainment_ratio', mediaentertainmentSchema);
const apparelluxurygoods  = mongoose.model('apparelluxurygoods_ratio', apparelluxurygoodsSchema);
const automobile  = mongoose.model('automobile_ratio', automobileSchema);
const hotelrestaurantleisure  = mongoose.model('hotelrestaurantleisure_ratio', hotelrestaurantleisureSchema);
const householddurables  = mongoose.model('householddurables_ratio', householddurablesSchema);
const internetdirectmarketing  = mongoose.model('internetdirectmarketing_ratio', internetdirectmarketingSchema);
const leisuregoods  = mongoose.model('leisuregoods_ratio', leisuregoodsSchema);
const retail  = mongoose.model('retail_ratio', retailSchema);
const foodbeveragetobacco  = mongoose.model('foodbeveragetobacco_ratio', foodbeveragetobaccoSchema);
const foodstaplesretailing  = mongoose.model('foodstaplesretailing_ratio', foodstaplesretailingSchema);
const householdpersonalproducts  = mongoose.model('householdpersonalproducts_ratio', householdpersonalproductsSchema);
const oilgasconsumablefuels  = mongoose.model('oilgasconsumablefuels_ratio', oilgasconsumablefuelsSchema);
const oilgasequipmentservices  = mongoose.model('oilgasequipmentservices_ratio', oilgasequipmentservicesSchema);
const oilgasexplorationproduction  = mongoose.model('oilgasexplorationproduction_ratio', oilgasexplorationproductionSchema);
const oilgasstoragetransportation  = mongoose.model('oilgasstoragetransportation_ratio', oilgasstoragetransportationSchema);
const banks  = mongoose.model('banks_ratio', banksSchema);
const brokeragecapitalmarkets  = mongoose.model('brokeragecapitalmarkets_ratio', brokeragecapitalmarketsSchema);
const diversifiedfinancialcreditservices  = mongoose.model('diversifiedfinancialcreditservices_ratio', diversifiedfinancialcreditservicesSchema);
const insurance  = mongoose.model('insurance_ratio', insuranceSchema);
const regionalbanks  = mongoose.model('regionalbanks_ratio', regionalbanksSchema);
const thriftsmortgagefinance  = mongoose.model('thriftsmortgagefinance_ratio', thriftsmortgagefinanceSchema);
const biotechnology  = mongoose.model('biotechnology_ratio', biotechnologySchema);
const healthcareservices  = mongoose.model('healthcareservices_ratio', healthcareservicesSchema);
const medicalequipmentdevicessupplies  = mongoose.model('medicalequipmentdevicessupplies_ratio', medicalequipmentdevicessuppliesSchema);
const pharmaceuticals  = mongoose.model('pharmaceuticals_ratio', pharmaceuticalsSchema);
const aerospacedefense  = mongoose.model('aerospacedefense_ratio', aerospacedefenseSchema);
const commercialprofessionalservices  = mongoose.model('commercialprofessionalservices_ratio', commercialprofessionalservicesSchema);
const constructionmaterials  = mongoose.model('constructionmaterials_ratio', constructionmaterialsSchema);
const industrialgoods  = mongoose.model('industrialgoods_ratio', industrialgoodsSchema);
const machinery  = mongoose.model('machinery_ratio', machinerySchema);
const transportation  = mongoose.model('transportation_ratio', transportationSchema);
const hardwareequipment  = mongoose.model('hardwareequipment_ratio', hardwareequipmentSchema);
const itservices  = mongoose.model('itservices_ratio', itservicesSchema);
const semiconductors  = mongoose.model('semiconductors_ratio', semiconductorsSchema);
const software  = mongoose.model('software_ratio', softwareSchema);
const basicmaterials  = mongoose.model('basicmaterials_ratio', basicmaterialsSchema);
const industrialmetals  = mongoose.model('industrialmetals_ratio', industrialmetalsSchema);
const preciousmetals  = mongoose.model('preciousmetals_ratio', preciousmetalsSchema);
const commercialreits  = mongoose.model('commercialreits_ratio', commercialreitsSchema);
const realestateservices  = mongoose.model('realestateservices_ratio', realestateservicesSchema);
const residentialmortgages  = mongoose.model('residentialmortgages_ratio', residentialmortgagesSchema);
const retailreits  = mongoose.model('retailreits_ratio', retailreitsSchema);
const electric  = mongoose.model('electric_ratio', electricSchema);
const gas  = mongoose.model('gas_ratio', gasSchema);
const independentpowerrenewables  = mongoose.model('independentpowerrenewables_ratio', independentpowerrenewablesSchema);
const multilineutilities  = mongoose.model('multilineutilities_ratio', multilineutilitiesSchema);
const water  = mongoose.model('water_ratio', waterSchema);
const chemicals  = mongoose.model('chemicals_ratio', chemicalsSchema);
const diversifiedconsumerservices  = mongoose.model('diversifiedconsumerservices_ratio', diversifiedconsumerservicesSchema);


module.exports = {
  materials_ratio ,
  consumer_staples_ratio ,
  consumer_discretionary_ratio ,
  energy_ratio ,
  financials_ratio,
  health_care_ratio,
  industrials_ratio,
  real_estate_ratio,
  information_technology_ratio,
  communication_services_ratio,
  utilities_ratio,
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
  water,
  chemicals,
  diversifiedconsumerservices
  
}

