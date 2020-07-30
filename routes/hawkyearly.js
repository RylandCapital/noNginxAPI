const router = require('express').Router();
let hawkyearly = require('../models/hawkyearly.model');

router.route('/').get((req, res) => {
    hawkyearly.find()
        .then(hawkyearly => res.json(hawkyearly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;