const router = require('express').Router();
let momodrawPONE = require('../models/momodrawPONE.model');

router.route('/').get((req, res) => {
    momodrawPONE.find()
        .then(momodrawPONE=> res.json(momodrawPONE))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;