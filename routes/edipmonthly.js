const router = require('express').Router();
let edipmonthly = require('../models/edipmonthly.model');

router.route('/').get((req, res) => {
    edipmonthly.find()
        .then(edipmonthly => res.json(edipmonthly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;