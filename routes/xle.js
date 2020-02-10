const router = require('express').Router();
let xle = require('../models/xle.model');

router.route('/').get((req, res) => {
    xle.find()
        .then(xle => res.json(xle))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;