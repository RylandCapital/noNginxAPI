const router = require('express').Router();
let hctest = require('../models/hctest.model');

router.route('/').get((req, res) => {
    hctest.find()
    .then(hctest => res.json(hctest))
});

module.exports = router;