const router = require('express').Router();
let optionstats = require('../models/optionstats.model');

router.route('/').get((req, res) => {
    optionstats.find()
        .then(optionstats=> res.json(optionstats))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;