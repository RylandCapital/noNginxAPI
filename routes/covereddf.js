const router = require('express').Router();
let covereddf = require('../models/covereddf.model');

router.route('/').get((req, res) => {
    covereddf.find()
        .then(covereddf => res.json(covereddf))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;