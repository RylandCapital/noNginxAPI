const router = require('express').Router();
let xlkmlsync = require('../models/xlkmlsync.model');

router.route('/').get((req, res) => {
    xlkmlsync.find()
        .then(xlkmlsync => res.json(xlkmlsync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;