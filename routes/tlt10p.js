const router = require('express').Router();
let tlt10p = require('../models/tlt10p.model');

router.route('/').get((req, res) => {
    tlt10p.find()
        .then(tlt10p => res.json(tlt10p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;