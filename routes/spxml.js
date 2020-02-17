const router = require('express').Router();
let spxml = require('../models/spxml.model');

router.route('/').get((req, res) => {
    spxml.find()
    .then(spxml => res.json(spxml))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;