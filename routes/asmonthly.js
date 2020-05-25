const router = require('express').Router();
let asmonthly = require('../models/asmonthly.model');

router.route('/').get((req, res) => {
    asmonthly.find()
        .then(asmonthly => res.json(asmonthly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;