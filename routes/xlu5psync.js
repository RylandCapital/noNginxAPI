const router = require('express').Router();
let xlu5psync = require('../models/xlu5psync.model');

router.route('/').get((req, res) => {
    xlu5psync.find()
        .then(xlu5psync => res.json(xlu5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;