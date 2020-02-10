const router = require('express').Router();
let fwds10 = require('../models/fwds10.model');

router.route('/').get((req, res) => {
    fwds10.find()
        .then(fwds10 => res.json(fwds10))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;