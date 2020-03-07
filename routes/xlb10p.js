const router = require('express').Router();
let xlb10p = require('../models/xlb10p.model');

router.route('/').get((req, res) => {
    xlb10p.find()
        .then(xlb10p => res.json(xlb10p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;