const router = require('express').Router();
let xlv5p = require('../models/xlv5p.model');

router.route('/').get((req, res) => {
    xlv5p.find()
        .then(xlv5p => res.json(xlv5p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;