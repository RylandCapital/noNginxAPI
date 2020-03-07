const router = require('express').Router();
let xlp5p = require('../models/xlp5p.model');

router.route('/').get((req, res) => {
    xlp5p.find()
        .then(xlp5p => res.json(xlp5p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;