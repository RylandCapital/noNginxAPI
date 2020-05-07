const router = require('express').Router();
let momostats = require('../models/momostats.model');

router.route('/').get((req, res) => {
    momostats.find()
        .then(momostats => res.json(momostats))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;