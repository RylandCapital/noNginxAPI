const router = require('express').Router();
let aggrid2_pi_group = require('../models/aggrid2_pi_group.model');

router.route('/').get((req, res) => {
    aggrid2_pi_group.find().lean()
        .then(aggrid2_pi_group => res.json(aggrid2_pi_group))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;