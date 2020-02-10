const router = require('express').Router();
let xly = require('../models/xly.model');

router.route('/').get((req, res) => {
    xly.find()
        .then(xly => res.json(xly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;