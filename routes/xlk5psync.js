const router = require('express').Router();
let xlk5psync = require('../models/xlk5psync.model');

router.route('/').get((req, res) => {
    xlk5psync.find()
        .then(xlk5psync => res.json(xlk5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;