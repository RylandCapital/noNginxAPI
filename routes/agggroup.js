const router = require('express').Router();
let agggroup = require('../models/agggroup.model');

router.route('/').get((req, res) => {
    agggroup.find().lean()
        .then(agggroup => res.json(agggroup))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;