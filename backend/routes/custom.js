const router = require('express').Router();
let custom = require('../models/custom.model');

router.route('/').get((req, res) => {
    custom.find()
        .then(custom => res.json(custom))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;