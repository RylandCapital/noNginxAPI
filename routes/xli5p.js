const router = require('express').Router();
let xli5p = require('../models/xli5p.model');

router.route('/').get((req, res) => {
    xli5p.find()
        .then(xli5p => res.json(xli5p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;