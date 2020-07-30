const router = require('express').Router();
let hawkmonthly = require('../models/hawkmonthly.model');

router.route('/').get((req, res) => {
    hawkmonthly.find()
        .then(hawkmonthly => res.json(hawkmonthly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;