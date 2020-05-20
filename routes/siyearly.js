const router = require('express').Router();
let siyearly = require('../models/siyearly.model');

router.route('/').get((req, res) => {
    siyearly.find()
        .then(siyearly => res.json(siyearly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;