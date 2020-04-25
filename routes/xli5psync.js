const router = require('express').Router();
let xli5psync = require('../models/xli5psync.model');

router.route('/').get((req, res) => {
    xli5psync.find()
        .then(xli5psync => res.json(xli5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;