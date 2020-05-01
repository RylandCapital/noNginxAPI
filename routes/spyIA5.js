const router = require('express').Router();
let spyIA5 = require('../models/spyIA5.model');

router.route('/').get((req, res) => {
    spyIA5.find()
        .then(spyIA5 => res.json(spyIA5))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;