const router = require('express').Router();
let xlymlsync = require('../models/xlymlsync.model');

router.route('/').get((req, res) => {
    xlymlsync.find()
        .then(xlymlsync => res.json(xlymlsync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;