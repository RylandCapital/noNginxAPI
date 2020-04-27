const router = require('express').Router();
let vix10psync = require('../models/vix10psync.model');

router.route('/').get((req, res) => {
    vix10psync.find()
        .then(vix10psync => res.json(vix10psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;