const router = require('express').Router();
let healthcheck= require('../models/healthcheck.model');

router.route('/').get((req, res) => {
    healthcheck.find()
        .then(healthcheck => res.status(200).json())
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;