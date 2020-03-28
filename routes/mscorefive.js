const router = require('express').Router();
let mscorefive = require('../models/mscorefive.model');

router.route('/').get((req, res) => {
    mscorefive.find()
        .then(mscorefive => res.json(mscorefive))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;