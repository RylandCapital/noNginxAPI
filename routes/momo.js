const router = require('express').Router();
let momo= require('../models/momo.model');

router.route('/').get((req, res) => {
    momo.find()
        .then(momo=> res.json(momo))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;