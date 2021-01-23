const router = require('express').Router();
let spac = require('../models/spacmomo.model');

router.route('/spacyearly').get((req, res) => {
    spac['spacyearly'].find().lean()
        .then(spac => res.json(spac))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/spacmonthly').get((req, res) => {
    spac['spacmonthly'].find().lean()
        .then(spac => res.json(spac))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/cmomospac').get((req, res) => {
    spac['cmomospac'].find().lean()
        .then(spac => res.json(spac))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/spacstats').get((req, res) => {
    spac['spacstats'].find().lean()
        .then(spac => res.json(spac))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/spacallo').get((req, res) => {
    spac['spacallo'].find().lean()
        .then(spac=> res.json(spac))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;