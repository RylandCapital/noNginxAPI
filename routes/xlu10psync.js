const router = require('express').Router();
let xlu10psync = require('../models/xlu10psync.model');

router.route('/').get((req, res) => {
    xlu10psync.find()
        .then(xlu10psync => res.json(xlu10psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;