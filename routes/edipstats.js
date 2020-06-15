const router = require('express').Router();
let edipstats = require('../models/edipstats.model');

router.route('/').get((req, res) => {
    edipstats.find()
        .then(edipstats => res.json(edipstats))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;