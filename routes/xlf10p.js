const router = require('express').Router();
let xlf10p = require('../models/xlf10p.model');

router.route('/').get((req, res) => {
    xlf10p.find()
        .then(xlf10p => res.json(xlf10p))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;