const router = require('express').Router();
let spy5psync = require('../models/spy5psync.model');

router.route('/').get((req, res) => {
    spy5psync.find()
        .then(spy5psync => res.json(spy5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;