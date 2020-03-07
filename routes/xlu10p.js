const router = require('express').Router();
let xlu10p = require('../models/xlu10p.model');

router.route('/').get((req, res) => {
    xlu10p.find()
        .then(xlu10p => res.json(xlu10p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;