const router = require('express').Router();
let pevents = require('../models/pevents.model');

router.route('/').get((req, res) => {
    pevents.find()
        .then(pevents => res.json(pevents))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;