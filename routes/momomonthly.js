const router = require('express').Router();
let momomonthly= require('../models/momomonthly.model');

router.route('/').get((req, res) => {
    momomonthly.find()
        .then(momomonthly=> res.json(momomonthly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;