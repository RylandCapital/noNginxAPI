const router = require('express').Router();
let xly10p = require('../models/xly10p.model');

router.route('/').get((req, res) => {
    xly10p.find()
        .then(xly10p => res.json(xly10p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;