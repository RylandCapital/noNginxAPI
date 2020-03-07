const router = require('express').Router();
let xlv10p = require('../models/xlv10p.model');

router.route('/').get((req, res) => {
    xlv10p.find()
        .then(xlv10p => res.json(xlv10p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;