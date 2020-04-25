const router = require('express').Router();
let xlk10psync = require('../models/xlk10psync.model');

router.route('/').get((req, res) => {
    xlk10psync.find()
        .then(xlk10psync => res.json(xlk10psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;