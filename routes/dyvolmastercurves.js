const router = require('express').Router();
let dyvolmastercurves = require('../models/dyvolmastercurves.model');

router.route('/').get((req, res) => {
    dyvolmastercurves.find()
        .then(dyvolmastercurves => res.json(dyvolmastercurves))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;