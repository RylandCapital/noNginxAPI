const router = require('express').Router();
let xlb10psync = require('../models/xlb10psync.model');

router.route('/').get((req, res) => {
    xlb10psync.find()
        .then(xlb10psync => res.json(xlb10psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;