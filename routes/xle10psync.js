const router = require('express').Router();
let xle10psync = require('../models/xle10psync.model');

router.route('/').get((req, res) => {
    xle10psync.find()
        .then(xle10psync => res.json(xle10psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;