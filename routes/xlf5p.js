const router = require('express').Router();
let xlf5p = require('../models/xlf5p.model');

router.route('/').get((req, res) => {
    xlf5p.find()
        .then(xlf5p => res.json(xlf5p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;