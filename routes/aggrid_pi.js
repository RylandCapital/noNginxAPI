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


router.route('/tickers/automobilescomponents').get((req, res) => {aggrid_pi['automobilescomponentsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/banks').get((req, res) => {aggrid_pi['banksb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/capitalgoods').get((req, res) => {aggrid_pi['capitalgoodsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/commercialprofessionalservices').get((req, res) => {aggrid_pi['commercialprofessionalservicesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/communicationservices').get((req, res) => {aggrid_pi['communicationservicesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/consumerdurablesapparel').get((req, res) => {aggrid_pi['consumerdurablesapparelb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/consumerservices').get((req, res) => {aggrid_pi['consumerservicesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/diversifiedfinancials').get((req, res) => {aggrid_pi['diversifiedfinancialsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/energygroup').get((req, res) => {aggrid_pi['energygroupb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/foodstaplesretailing').get((req, res) => {aggrid_pi['foodstaplesretailingb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/foodbeveragetobacco').get((req, res) => {aggrid_pi['foodbeveragetobaccob'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/healthcareequipmentservices').get((req, res) => {aggrid_pi['healthcareequipmentservicesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/householdpersonalproducts').get((req, res) => {aggrid_pi['householdpersonalproductsb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/insurance').get((req, res) => {aggrid_pi['insuranceb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/materialsgroup').get((req, res) => {aggrid_pi['materialsgroupb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/media').get((req, res) => {aggrid_pi['mediab'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/mediaentertainment').get((req, res) => {aggrid_pi['mediaentertainmentb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/pharmaceuticalsbiotechnologylifesciences').get((req, res) => {aggrid_pi['pharmaceuticalsbiotechnologylifesciencesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/realestategroup').get((req, res) => {aggrid_pi['realestategroupb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/retailing').get((req, res) => {aggrid_pi['retailingb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/semiconductorssemiconductorequipment').get((req, res) => {aggrid_pi['semiconductorssemiconductorequipmentb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/softwareservices').get((req, res) => {aggrid_pi['softwareservicesb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/technologyhardwareequipment').get((req, res) => {aggrid_pi['technologyhardwareequipmentb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/transportation').get((req, res) => {aggrid_pi['transportationb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/tickers/utilitiesgroup').get((req, res) => {aggrid_pi['utilitiesgroupb'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});


module.exports = router;
