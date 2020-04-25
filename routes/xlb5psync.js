const router = require('express').Router();
let xlb5psync = require('../models/xlb5psync.model');

router.route('/').get((req, res) => {
    xlb5psync.find()
        .then(xlb5psync => res.json(xlb5psync))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;