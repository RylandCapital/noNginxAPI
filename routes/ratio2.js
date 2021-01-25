const router = require('express').Router();
let ratio = require('../models/ratio2.model');

router.route('/financials').get((req, res) => {
    ratio['ratiofinancials'].find().lean()
        .then(spac => res.json(spac))
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;