const router = require('express').Router();
let asyearly = require('../models/asyearly.model');

router.route('/').get((req, res) => {
    asyearly.find()
        .then(asyearly => res.json(asyearly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;