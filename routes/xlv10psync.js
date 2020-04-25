const router = require('express').Router();
let xlv10psync = require('../models/xlv10psync.model');

router.route('/').get((req, res) => {
    xlv10psync.find()
        .then(xlv10psync => res.json(xlv10psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;