const router = require('express').Router();
let xlkml = require('../models/xlkml.model');

router.route('/').get((req, res) => {
    xlkml.find()
    .then(xlkml => res.json(xlkml))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;