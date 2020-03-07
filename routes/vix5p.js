const router = require('express').Router();
let vix5p = require('../models/vix5p.model');

router.route('/').get((req, res) => {
    vix5p.find()
        .then(vix5p => res.json(vix5p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;