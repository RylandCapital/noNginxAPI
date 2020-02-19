const router = require('express').Router();
let spyml = require('../models/spyml.model');

router.route('/').get((req, res) => {
    spyml.find()
    .then(spyml => res.json(spyml))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;