const router = require('express').Router();
let xli = require('../models/xli.model');

router.route('/').get((req, res) => {
    xli.find()
        .then(xli => res.json(xli))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;