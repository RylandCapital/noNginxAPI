const router = require('express').Router();
let momoyearly= require('../models/momoyearly.model');

router.route('/').get((req, res) => {
    momoyearly.find()
        .then(momoyearly=> res.json(momoyearly))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;