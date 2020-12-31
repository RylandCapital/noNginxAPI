const router = require('express').Router();
let aggrid_pi = require('../models/aggsector_pi.model');


router.route('/materials').get((req, res) => {
    aggrid_pi['materials_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/consumer_staples').get((req, res) => {
    aggrid_pi['consumer_staples_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/consumer_discretionary').get((req, res) => {
    aggrid_pi['consumer_discretionary_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/energy').get((req, res) => {
    aggrid_pi['energy_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/financials').get((req, res) => {
    aggrid_pi['financials_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/health_care').get((req, res) => {
    aggrid_pi['health_care_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/industrials').get((req, res) => {
    aggrid_pi['industrials_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/real_estate').get((req, res) => {
    aggrid_pi['real_estate_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/information_technology').get((req, res) => {
    aggrid_pi['information_technology_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/communication_services').get((req, res) => {
    aggrid_pi['communication_services_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/utilities').get((req, res) => {
    aggrid_pi['utilities_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));});

router.route('/automobilescomponents').get((req, res) => {aggrid_pi['automobilescomponents'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/banks').get((req, res) => {aggrid_pi['banks'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/capitalgoods').get((req, res) => {aggrid_pi['capitalgoods'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/commercialprofessionalservices').get((req, res) => {aggrid_pi['commercialprofessionalservices'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/communicationservices').get((req, res) => {aggrid_pi['communicationservices'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/consumerdurablesapparel').get((req, res) => {aggrid_pi['consumerdurablesapparel'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/consumerservices').get((req, res) => {aggrid_pi['consumerservices'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/diversifiedfinancials').get((req, res) => {aggrid_pi['diversifiedfinancials'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/energygroup').get((req, res) => {aggrid_pi['energygroup'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/foodstaplesretailing').get((req, res) => {aggrid_pi['foodstaplesretailing'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/foodbeveragetobacco').get((req, res) => {aggrid_pi['foodbeveragetobacco'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/healthcareequipmentservices').get((req, res) => {aggrid_pi['healthcareequipmentservices'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/householdpersonalproducts').get((req, res) => {aggrid_pi['householdpersonalproducts'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/insurance').get((req, res) => {aggrid_pi['insurance'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/materialsgroup').get((req, res) => {aggrid_pi['materialsgroup'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/media').get((req, res) => {aggrid_pi['media'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/mediaentertainment').get((req, res) => {aggrid_pi['mediaentertainment'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/pharmaceuticalsbiotechnologylifesciences').get((req, res) => {aggrid_pi['pharmaceuticalsbiotechnologylifesciences'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/realestategroup').get((req, res) => {aggrid_pi['realestategroup'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/retailing').get((req, res) => {aggrid_pi['retailing'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/semiconductorssemiconductorequipment').get((req, res) => {aggrid_pi['semiconductorssemiconductorequipment'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/softwareservices').get((req, res) => {aggrid_pi['softwareservices'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/technologyhardwareequipment').get((req, res) => {aggrid_pi['technologyhardwareequipment'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/transportation').get((req, res) => {aggrid_pi['transportation'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/utilitiesgroup').get((req, res) => {aggrid_pi['utilitiesgroup'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});



module.exports = router;
