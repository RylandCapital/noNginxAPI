const router = require('express').Router();
let spx = require('../models/spx.model');

router.route('/').get((req, res) => {
    spx.find()
        .then(spx => res.json(spx))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;