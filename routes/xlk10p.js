const router = require('express').Router();
let xlk10p = require('../models/xlk10p.model');

router.route('/').get((req, res) => {
    xlk10p.find()
        .then(xlk10p => res.json(xlk10p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;