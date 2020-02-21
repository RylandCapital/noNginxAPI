const router = require('express').Router();
let hctestr = require('../models/hctestr.model');

router.route('/').get((req, res) => {
    hctestr.find()
    .then(hctestr => res.json(hctestr))
});

module.exports = router;