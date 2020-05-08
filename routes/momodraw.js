const router = require('express').Router();
let momodraw= require('../models/momodraw.model');

router.route('/').get((req, res) => {
    momodraw.find()
        .then(momodraw=> res.json(momodraw))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;