const router = require('express').Router();
let xlb5p = require('../models/xlb5p.model');

router.route('/').get((req, res) => {
    xlb5p.find()
        .then(xlb5p => res.json(xlb5p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;