const router = require('express').Router();
let xlp10psync = require('../models/xlp10psync.model');

router.route('/').get((req, res) => {
    xlp10psync.find()
        .then(xlp10psync => res.json(xlp10psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;