const router = require('express').Router();
let dyvolmaster = require('../models/dyvolmaster.model');

router.route('/').get((req, res) => {
    dyvolmaster.find()
        .then(dyvolmaster => res.json(dyvolmaster))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;