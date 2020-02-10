const router = require('express').Router();
let fwds22 = require('../models/fwds5.model');

router.route('/').get((req, res) => {
    fwds22.find()
        .then(fwds22 => res.json(fwds22))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;