const router = require('express').Router();
let xli10psync = require('../models/xli10psync.model');

router.route('/').get((req, res) => {
    xli10psync.find()
        .then(xli10psync => res.json(xli10psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;