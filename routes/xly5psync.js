const router = require('express').Router();
let xly5psync = require('../models/xly5psync.model');

router.route('/').get((req, res) => {
    xly5psync.find()
        .then(xly5psync => res.json(xly5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;