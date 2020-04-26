const router = require('express').Router();
let xlpmlsync = require('../models/xlpmlsync.model');

router.route('/').get((req, res) => {
    xlpmlsync.find()
        .then(xlpmlsync => res.json(xlpmlsync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;