const router = require('express').Router();
let sistats = require('../models/sistats.model');

router.route('/').get((req, res) => {
    sistats.find()
        .then(sistats => res.json(sistats))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;