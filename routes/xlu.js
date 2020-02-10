const router = require('express').Router();
let xlu = require('../models/xlu.model');

router.route('/').get((req, res) => {
    xlu.find()
        .then(xlu => res.json(xlu))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;