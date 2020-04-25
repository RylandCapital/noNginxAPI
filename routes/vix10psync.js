const router = require('express').Router();
let spy10psync = require('../models/spy10psync.model');

router.route('/').get((req, res) => {
    spy10psync.find()
        .then(spy10psync => res.json(spy10psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;