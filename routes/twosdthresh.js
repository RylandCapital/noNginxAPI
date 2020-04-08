const router = require('express').Router();
let twosdthresh = require('../models/twosdthresh.model');

router.route('/').get((req, res) => {
    twosdthresh.find()
        .then(twosdthresh => res.json(twosdthresh))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;