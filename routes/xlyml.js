const router = require('express').Router();
let xlyml = require('../models/xlyml.model');

router.route('/').get((req, res) => {
    xlyml.find()
    .then(xlyml => res.json(xlyml))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;