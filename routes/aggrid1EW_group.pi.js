const router = require('express').Router();
let aggrid1EW_pi_group = require('../models/aggrid1EW_pi_group.model');

router.route('/').get((req, res) => {
    aggrid1EW_pi_group.find().lean()
        .then(aggrid1EW_pi_group => res.json(aggrid1EW_pi_group))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;