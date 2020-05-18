const router = require('express').Router();
let simonthly = require('../models/simonthly.model');

router.route('/').get((req, res) => {
    simonthly.find()
        .then(simonthly => res.json(simonthly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;