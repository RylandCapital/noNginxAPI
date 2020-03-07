const router = require('express').Router();
let tlt5p = require('../models/tlt5p.model');

router.route('/').get((req, res) => {
    tlt5p.find()
        .then(tlt5p => res.json(tlt5p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;