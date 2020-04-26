const router = require('express').Router();
let xlemlsync = require('../models/xlemlsync.model');

router.route('/').get((req, res) => {
    xlemlsync.find()
        .then(xlemlsync => res.json(xlemlsync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;