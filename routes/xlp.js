const router = require('express').Router();
let xlp = require('../models/xlp.model');

router.route('/').get((req, res) => {
    xlp.find()
        .then(xlp => res.json(xlp))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;