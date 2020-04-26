const router = require('express').Router();
let xlimlsync = require('../models/xlimlsync.model');

router.route('/').get((req, res) => {
    xlimlsync.find()
        .then(xlimlsync => res.json(xlimlsync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;