const router = require('express').Router();
let xlfml = require('../models/xlfml.model');

router.route('/').get((req, res) => {
    xlfml.find()
    .then(xlfml => res.json(xlfml))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;