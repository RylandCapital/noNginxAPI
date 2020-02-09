const router = require('express').Router();
let features = require('../models/features.model');

router.route('/').get((req, res) => {
    features.find()
        .then(features => res.json(features))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;