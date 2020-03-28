const router = require('express').Router();
let mscoreten= require('../models/mscoreten.model');

router.route('/').get((req, res) => {
    mscoreten.find()
        .then(mscoreten=> res.json(mscoreten))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;