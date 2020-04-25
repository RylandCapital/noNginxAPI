const router = require('express').Router();
let vix5psync = require('../models/vix5psync.model');

router.route('/').get((req, res) => {
    vix5psync.find()
        .then(vix5psync => res.json(vix5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;