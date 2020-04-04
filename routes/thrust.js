const router = require('express').Router();
let thrust = require('../models/thrust.model');

router.route('/').get((req, res) => {
    thrust.find()
        .then(thrust => res.json(thrust))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;