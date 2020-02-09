const router = require('express').Router();
let vix = require('../models/vix.model');

router.route('/').get((req, res) => {
    vix.find()
        .then(vix => res.json(vix))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;