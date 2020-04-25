const router = require('express').Router();
let xle5psync = require('../models/xle5psync.model');

router.route('/').get((req, res) => {
    xle5psync.find()
        .then(xle5psync => res.json(xle5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;