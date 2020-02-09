const router = require('express').Router();
let tlt = require('../models/tlt.model');

router.route('/').get((req, res) => {
    tlt.find()
        .then(tlt => res.json(tlt))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;