const router = require('express').Router();
let fwds5 = require('../models/fwds5.model');

router.route('/').get((req, res) => {
    fwds5.find()
        .then(fwds5 => res.json(fwds5))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;