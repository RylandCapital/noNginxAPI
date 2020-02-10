const router = require('express').Router();
let xlb = require('../models/xlb.model');

router.route('/').get((req, res) => {
    xlb.find()
        .then(xlb => res.json(xlb))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;