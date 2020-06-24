const router = require('express').Router();
let toptendf = require('../models/toptendf.model');

router.route('/').get((req, res) => {
    toptendf.find()
        .then(toptendf => res.json(toptendf))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;