const router = require('express').Router();
let vix10p = require('../models/vix10p.model');

router.route('/').get((req, res) => {
    vix10p.find()
        .then(vix10p => res.json(vix10p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;