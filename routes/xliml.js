const router = require('express').Router();
let xliml = require('../models/xliml.model');

router.route('/').get((req, res) => {
    xliml.find()
    .then(xliml => res.json(xliml))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
