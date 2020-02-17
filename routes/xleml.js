const router = require('express').Router();
let xleml = require('../models/xleml.model');

router.route('/').get((req, res) => {
    xleml.find()
    .then(xleml => res.json(xleml))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;