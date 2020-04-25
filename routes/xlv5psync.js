const router = require('express').Router();
let xlv5psync = require('../models/xlv5psync.model');

router.route('/').get((req, res) => {
    xlv5psync.find()
        .then(xlv5psync => res.json(xlv5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;