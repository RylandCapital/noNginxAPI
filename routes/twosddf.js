const router = require('express').Router();
let twosddf = require('../models/twosddf.model');

router.route('/').get((req, res) => {
    twosddf.find()
        .then(twosddf => res.json(twosddf))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;