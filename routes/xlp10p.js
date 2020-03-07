const router = require('express').Router();
let xlp10p = require('../models/xlp10p.model');

router.route('/').get((req, res) => {
    xlp10p.find()
        .then(xlp10p => res.json(xlp10p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;