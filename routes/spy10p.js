const router = require('express').Router();
let spy10p = require('../models/spy10p.model');

router.route('/').get((req, res) => {
    spy10p.find()
        .then(spy10p => res.json(spy10p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;