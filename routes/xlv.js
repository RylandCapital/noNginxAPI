const router = require('express').Router();
let xlv = require('../models/xlv.model');

router.route('/').get((req, res) => {
    xlv.find()
        .then(xlv => res.json(xlv))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;