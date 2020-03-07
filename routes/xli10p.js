const router = require('express').Router();
let xli10p = require('../models/xli10p.model');

router.route('/').get((req, res) => {
    xli10p.find()
        .then(xli10p => res.json(xli10p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;