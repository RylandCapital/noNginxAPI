const router = require('express').Router();
let xlk5p = require('../models/xlk5p.model');

router.route('/').get((req, res) => {
    xlk5p.find()
        .then(xlk5p => res.json(xlk5p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;