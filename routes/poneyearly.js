const router = require('express').Router();
let poneyearly = require('../models/poneyearly.model');

router.route('/').get((req, res) => {
    poneyearly.find()
        .then(poneyearly => res.json(poneyearly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;