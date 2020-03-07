const router = require('express').Router();
let xlu5p = require('../models/xlu5p.model');

router.route('/').get((req, res) => {
    xlu5p.find()
        .then(xlu5p => res.json(xlu5p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;