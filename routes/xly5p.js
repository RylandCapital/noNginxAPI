const router = require('express').Router();
let xly5p = require('../models/xly5p.model');

router.route('/').get((req, res) => {
    xly5p.find()
        .then(xly5p => res.json(xly5p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;