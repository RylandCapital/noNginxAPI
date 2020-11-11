const router = require('express').Router();
let aggrid_pi = require('../models/aggsector_pi.model');

/*router.route('/world').get((req, res) => {
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
});*/

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
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
