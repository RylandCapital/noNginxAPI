const router = require('express').Router();
let hawkstats = require('../models/hawkstats.model');

router.route('/').get((req, res) => {
    hawkstats.find()
        .then(hawkstats => res.json(hawkstats))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;