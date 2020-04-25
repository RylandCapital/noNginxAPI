const router = require('express').Router();
let xlf10psync = require('../models/xlf10psync.model');

router.route('/').get((req, res) => {
    xlf10psync.find()
        .then(xlf10psync => res.json(xlf10psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;