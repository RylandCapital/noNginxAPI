const router = require('express').Router();
let edipyearly = require('../models/edipyearly.model');

router.route('/').get((req, res) => {
    edipyearly.find()
        .then(edipyearly => res.json(edipyearly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;