const router = require('express').Router();
let aggrid2_pi = require('../models/aggrid2_pi.model');

router.route('/').get((req, res) => {
    aggrid2_pi.find().lean()
        .then(aggrid2_pi => res.json(aggrid2_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;