const router = require('express').Router();
let xlf = require('../models/xlf.model');

router.route('/').get((req, res) => {
    xlf.find()
        .then(xlf => res.json(xlf))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;