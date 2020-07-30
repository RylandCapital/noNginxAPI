const router = require('express').Router();
let momohawk = require('../models/momodrawHAWK.model');

router.route('/').get((req, res) => {
    momohawk.find()
        .then(momohawk => res.json(momohawk))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;