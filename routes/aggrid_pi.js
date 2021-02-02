const router = require('express').Router();
let aggrid_pi = require('../models/aggrid_pi.model');
let aggrid_pib = require('../models/aggrid_pi.tickers.model');

router.route('/world').get((req, res) => {
    aggrid_pi['world'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/intermarket').get((req, res) => {
    aggrid_pi['intermarket'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/size_style').get((req, res) => {
    aggrid_pi['size_style'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/cw_sector').get((req, res) => {
    aggrid_pi['cw_sector'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ew_sector').get((req, res) => {
    aggrid_pi['ew_sector'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/sc_sector').get((req, res) => {
    aggrid_pi['sc_sector'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/materials').get((req, res) => {
    aggrid_pi['materials'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/consumer_staples').get((req, res) => {
    aggrid_pi['consumer_staples'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/consumer_discretionary').get((req, res) => {
    aggrid_pi['consumer_discretionary'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/energy').get((req, res) => {
    aggrid_pi['energy'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/financials').get((req, res) => {
    aggrid_pi['financials'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/health_care').get((req, res) => {
    aggrid_pi['health_care'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/industrials').get((req, res) => {
    aggrid_pi['industrials'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/real_estate').get((req, res) => {
    aggrid_pi['real_estate'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/information_technology').get((req, res) => {
    aggrid_pi['information_technology'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/communication_services').get((req, res) => {
    aggrid_pi['communication_services'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/utilities').get((req, res) => {
    aggrid_pi['utilities'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});





//ticker agrid1b - for sectors 
router.route('/tickers/materials').get((req, res) => {
    aggrid_pib['materialsb'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tickers/consumer_staples').get((req, res) => {
    aggrid_pib['consumer_staplesb'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tickers/consumer_discretionary').get((req, res) => {
    aggrid_pib['consumer_discretionaryb'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tickers/energy').get((req, res) => {
    aggrid_pib['energyb'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tickers/financials').get((req, res) => {
    aggrid_pib['financialsb'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tickers/health_care').get((req, res) => {
    aggrid_pib['health_careb'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tickers/industrials').get((req, res) => {
    aggrid_pib['industrialsb'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tickers/real_estate').get((req, res) => {
    aggrid_pib['real_estateb'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tickers/information_technology').get((req, res) => {
    aggrid_pib['information_technologyb'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tickers/communication_services').get((req, res) => {
    aggrid_pib['communication_servicesb'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tickers/utilities').get((req, res) => {
    aggrid_pib['utilitiesb'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tickers/allaggrid').get((req, res) => {
    aggrid_pib['allaggrid'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});





//sec_sub agrid1b - on sector page (3-7 entries)
router.route('/secsub/materials').get((req, res) => {
    aggrid_pib['materials_sec_sub'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/secsub/consumer_staples').get((req, res) => {
    aggrid_pib['consumer_staples_sec_sub'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/secsub/consumer_discretionary').get((req, res) => {
    aggrid_pib['consumer_discretionary_sec_sub'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/secsub/energy').get((req, res) => {
    aggrid_pib['energy_sec_sub'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/secsub/financials').get((req, res) => {
    aggrid_pib['financials_sec_sub'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/secsub/health_care').get((req, res) => {
    aggrid_pib['health_care_sec_sub'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/secsub/industrials').get((req, res) => {
    aggrid_pib['industrials_sec_sub'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/secsub/real_estate').get((req, res) => {
    aggrid_pib['real_estate_sec_sub'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/secsub/information_technology').get((req, res) => {
    aggrid_pib['information_technology_sec_sub'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/secsub/communication_services').get((req, res) => {
    aggrid_pib['communication_services_sec_sub'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/secsub/utilities').get((req, res) => {
    aggrid_pib['utilities_sec_sub'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});
















router.route('/tickers/interactivemediaentertainment').get((req, res) => {aggrid_pib['interactivemediaentertainmentb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/telecom').get((req, res) => {aggrid_pib['telecomb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/mediaentertainment').get((req, res) => {aggrid_pib['mediaentertainmentb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/apparelluxurygoods').get((req, res) => {aggrid_pib['apparelluxurygoodsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/automobile').get((req, res) => {aggrid_pib['automobileb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/hotelrestaurantleisure').get((req, res) => {aggrid_pib['hotelrestaurantleisureb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/householddurables').get((req, res) => {aggrid_pib['householddurablesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/internetdirectmarketing').get((req, res) => {aggrid_pib['internetdirectmarketingb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/leisuregoods').get((req, res) => {aggrid_pib['leisuregoodsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/retail').get((req, res) => {aggrid_pib['retailb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/foodbeveragetobacco').get((req, res) => {aggrid_pib['foodbeveragetobaccob'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/foodstaplesretailing').get((req, res) => {aggrid_pib['foodstaplesretailingb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/householdpersonalproducts').get((req, res) => {aggrid_pib['householdpersonalproductsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/oilgasconsumablefuels').get((req, res) => {aggrid_pib['oilgasconsumablefuelsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/oilgasequipmentservices').get((req, res) => {aggrid_pib['oilgasequipmentservicesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/oilgasexplorationproduction').get((req, res) => {aggrid_pib['oilgasexplorationproductionb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/oilgasstoragetransportation').get((req, res) => {aggrid_pib['oilgasstoragetransportationb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/banks').get((req, res) => {aggrid_pib['banksb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/brokeragecapitalmarkets').get((req, res) => {aggrid_pib['brokeragecapitalmarketsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/diversifiedfinancialcreditservices').get((req, res) => {aggrid_pib['diversifiedfinancialcreditservicesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/insurance').get((req, res) => {aggrid_pib['insuranceb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/regionalbanks').get((req, res) => {aggrid_pib['regionalbanksb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/thriftsmortgagefinance').get((req, res) => {aggrid_pib['thriftsmortgagefinanceb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/biotechnology').get((req, res) => {aggrid_pib['biotechnologyb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/healthcareservices').get((req, res) => {aggrid_pib['healthcareservicesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/medicalequipmentdevicessupplies').get((req, res) => {aggrid_pib['medicalequipmentdevicessuppliesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/pharmaceuticals').get((req, res) => {aggrid_pib['pharmaceuticalsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/aerospacedefense').get((req, res) => {aggrid_pib['aerospacedefenseb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/commercialprofessionalservices').get((req, res) => {aggrid_pib['commercialprofessionalservicesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/constructionmaterials').get((req, res) => {aggrid_pib['constructionmaterialsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/industrialgoods').get((req, res) => {aggrid_pib['industrialgoodsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/machinery').get((req, res) => {aggrid_pib['machineryb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/transportation').get((req, res) => {aggrid_pib['transportationb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/hardwareequipment').get((req, res) => {aggrid_pib['hardwareequipmentb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/itservices').get((req, res) => {aggrid_pib['itservicesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/semiconductors').get((req, res) => {aggrid_pib['semiconductorsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/software').get((req, res) => {aggrid_pib['softwareb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/basicmaterials').get((req, res) => {aggrid_pib['basicmaterialsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/industrialmetals').get((req, res) => {aggrid_pib['industrialmetalsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/preciousmetals').get((req, res) => {aggrid_pib['preciousmetalsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/commercialreits').get((req, res) => {aggrid_pib['commercialreitsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/realestateservices').get((req, res) => {aggrid_pib['realestateservicesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/residentialmortgages').get((req, res) => {aggrid_pib['residentialmortgagesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/retailreits').get((req, res) => {aggrid_pib['retailreitsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/electric').get((req, res) => {aggrid_pib['electricb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/gas').get((req, res) => {aggrid_pib['gasb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/independentpowerrenewables').get((req, res) => {aggrid_pib['independentpowerrenewablesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/multilineutilities').get((req, res) => {aggrid_pib['multilineutilitiesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/water').get((req, res) => {aggrid_pib['waterb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
module.exports = router;
