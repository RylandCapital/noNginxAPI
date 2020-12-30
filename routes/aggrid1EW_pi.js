const router = require('express').Router();
let aggrid1EW_pi = require('../models/aggrid1EW_pi.model');

router.route('/').get((req, res) => {
    aggrid1EW_pi.find().lean()
        .then(aggrid1EW_pi => res.json(aggrid1EW_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;