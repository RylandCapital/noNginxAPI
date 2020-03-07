const router = require('express').Router();
let xle5p = require('../models/xle5p.model');

router.route('/').get((req, res) => {
    xle5p.find()
        .then(xle5p => res.json(xle5p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;