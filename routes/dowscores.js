const router = require('express').Router();
let dowscores = require('../models/dowscores.model');

router.route('/').get((req, res) => {
    dowscores.find()
        .then(dowscores => res.json(dowscores))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;