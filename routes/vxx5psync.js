const router = require('express').Router();
let vxx5psync = require('../models/vxx5psync.model');

router.route('/').get((req, res) => {
    vxx5psync.find()
        .then(vxx5psync => res.json(vxx5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;