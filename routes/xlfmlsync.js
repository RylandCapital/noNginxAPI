const router = require('express').Router();
let xlfmlsync = require('../models/xlfmlsync.model');

router.route('/').get((req, res) => {
    xlfmlsync.find()
        .then(xlfmlsync => res.json(xlfmlsync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;