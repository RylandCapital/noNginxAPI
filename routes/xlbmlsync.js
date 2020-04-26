const router = require('express').Router();
let xlbmlsync = require('../models/xlbmlsync.model');

router.route('/').get((req, res) => {
    xlbmlsync.find()
        .then(xlbmlsync => res.json(xlbmlsync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;