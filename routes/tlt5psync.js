const router = require('express').Router();
let tlt5psync = require('../models/tlt5psync.model');

router.route('/').get((req, res) => {
    tlt5psync.find()
        .then(tlt5psync => res.json(tlt5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;