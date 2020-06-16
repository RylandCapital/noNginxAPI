const router = require('express').Router();
let ponemonthly = require('../models/ponemonthly.model');

router.route('/').get((req, res) => {
    ponemonthly.find()
        .then(ponemonthly => res.json(ponemonthly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;