const router = require('express').Router();
let momoallo= require('../models/momoallo.model');

router.route('/').get((req, res) => {
    momoallo.find()
        .then(momoallo=> res.json(momoallo))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;