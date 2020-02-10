const router = require('express').Router();
let ohlc = require('../models/ohlc.model');

router.route('/').get((req, res) => {
    ohlc.find()
        .then(ohlc => res.json(ohlc))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;