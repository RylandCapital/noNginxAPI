const router = require('express').Router();
let tlt10psync = require('../models/tlt10psync.model');

router.route('/').get((req, res) => {
    tlt10psync.find()
        .then(tlt10psync => res.json(tlt10psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;