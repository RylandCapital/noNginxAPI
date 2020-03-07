const router = require('express').Router();
let xle10p = require('../models/xle10p.model');

router.route('/').get((req, res) => {
    xle10p.find()
        .then(xle10p => res.json(xle10p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;