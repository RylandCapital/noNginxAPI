const router = require('express').Router();
let xlbml = require('../models/xlbml.model');

router.route('/').get((req, res) => {
    xlbml.find()
    .then(xlbml => res.json(xlbml))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;