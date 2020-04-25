const router = require('express').Router();
let xlp5psync = require('../models/xlp5psync.model');

router.route('/').get((req, res) => {
    xlp5psync.find()
        .then(xlp5psync => res.json(xlp5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;