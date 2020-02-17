const router = require('express').Router();
let xlpml = require('../models/xlpml.model');

router.route('/').get((req, res) => {
    xlpml.find()
    .then(xlpml => res.json(xlpml))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;