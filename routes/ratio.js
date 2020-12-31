const router = require('express').Router();
let ratio = require('../models/ratio.model');

router.route('/').get((req, res) => {
    ratio.find().lean()
        .then(ratio => res.json(ratio))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;