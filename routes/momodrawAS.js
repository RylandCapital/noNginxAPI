const router = require('express').Router();
let momodrawAS = require('../models/momodrawAS.model');

router.route('/').get((req, res) => {
    momodrawAS.find()
        .then(momodrawAS=> res.json(momodrawAS))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;