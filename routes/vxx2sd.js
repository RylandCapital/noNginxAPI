const router = require('express').Router();
let vxx2sd = require('../models/vxx2sd.model');

router.route('/').get((req, res) => {
    vxx2sd.find()
        .then(vxx2sd => res.json(vxx2sd))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;