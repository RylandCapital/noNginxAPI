const router = require('express').Router();
let mscore = require('../models/mscore.model');

router.route('/').get((req, res) => {
    mscore.find()
        .then(mscore=> res.json(mscore))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;