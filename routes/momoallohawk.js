const router = require('express').Router();
let momoallohawk = require('../models/momoallohawk.model');

router.route('/').get((req, res) => {
    momoallohawk.find()
        .then(momoallohawk=> res.json(momoallohawk))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;