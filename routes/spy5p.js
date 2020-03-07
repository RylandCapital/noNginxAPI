const router = require('express').Router();
let spy5p = require('../models/spy5p.model');

router.route('/').get((req, res) => {
    spy5p.find()
        .then(spy5p => res.json(spy5p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;