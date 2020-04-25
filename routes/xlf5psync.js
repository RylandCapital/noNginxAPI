const router = require('express').Router();
let xlf5psync = require('../models/xlf5psync.model');

router.route('/').get((req, res) => {
    xlf5psync.find()
        .then(xlf5psync => res.json(xlf5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;