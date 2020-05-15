const router = require('express').Router();
let momodrawSI = require('../models/momodrawSI.model');

router.route('/').get((req, res) => {
    momodrawSI.find()
        .then(momodrawSI=> res.json(momodrawSI))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;