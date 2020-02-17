const router = require('express').Router();
let xlvml = require('../models/xlvml.model');

router.route('/').get((req, res) => {
    xlvml.find()
    .then(xlvml => res.json(xlvml))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;