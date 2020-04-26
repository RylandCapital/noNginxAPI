const router = require('express').Router();
let spymlsync = require('../models/spymlsync.model');

router.route('/').get((req, res) => {
    spymlsync.find()
        .then(spymlsync => res.json(spymlsync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;