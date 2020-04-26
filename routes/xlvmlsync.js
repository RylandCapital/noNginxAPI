const router = require('express').Router();
let xlvmlsync = require('../models/xlvmlsync.model');

router.route('/').get((req, res) => {
    xlvmlsync.find()
        .then(xlvmlsync => res.json(xlvmlsync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;