const router = require('express').Router();
let xly10psync = require('../models/xly10psync.model');

router.route('/').get((req, res) => {
    xly10psync.find()
        .then(xly10psync => res.json(xly10psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;