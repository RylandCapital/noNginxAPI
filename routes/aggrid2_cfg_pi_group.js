const router = require('express').Router();
let aggrid2_cfg_pi = require('../models/aggrid2_cfg_pi.model');

router.route('/').get((req, res) => {
    aggrid2_cfg_pi.find().lean()
        .then(aggrid2_cfg_pi => res.json(aggrid2_cfg_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;