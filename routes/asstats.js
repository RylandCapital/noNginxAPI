const router = require('express').Router();
let asstats = require('../models/asstats.model');

router.route('/').get((req, res) => {
    asstats.find()
        .then(asstats=> res.json(asstats))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;