const router = require('express').Router();
let dvolsig = require('../models/dvolsig.model');

router.route('/').get((req, res) => {
    dvolsig.find()
        .then(dvolsig => res.json(dvolsig))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;