const router = require('express').Router();
let twosddfactive = require('../models/twosddfactive.model');

router.route('/').get((req, res) => {
    twosddfactive.find()
        .then(twosddfactive => res.json(twosddfactive))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;