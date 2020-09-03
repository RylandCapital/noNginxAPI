const router = require('express').Router();
let aggsector = require('../models/aggsector.model');

router.route('/').get((req, res) => {
    aggsector.find()
        .then(aggsector => res.json(aggsector))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;