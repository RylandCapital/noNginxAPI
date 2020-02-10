const router = require('express').Router();
let xlk = require('../models/xlk.model');

router.route('/').get((req, res) => {
    xlk.find()
        .then(xlk => res.json(xlk))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;