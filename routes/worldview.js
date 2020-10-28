const router = require('express').Router();
let worldview = require('../models/worldview.model');

router.route('/').get((req, res) => {
    worldview.find().lean()
        .then(worldview => res.json(worldview))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;