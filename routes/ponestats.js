const router = require('express').Router();
let ponestats = require('../models/ponestats.model');

router.route('/').get((req, res) => {
    ponestats.find()
        .then(ponestats=> res.json(ponestats))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;