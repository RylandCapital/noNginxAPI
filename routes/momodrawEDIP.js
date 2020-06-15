const router = require('express').Router();
let momodrawEDIP = require('../models/momodrawEDIP.model');

router.route('/').get((req, res) => {
    momodrawEDIP.find()
        .then(momodrawEDIP=> res.json(momodrawEDIP))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;