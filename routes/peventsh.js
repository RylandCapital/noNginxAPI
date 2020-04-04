const router = require('express').Router();
let peventsh = require('../models/peventsh.model');

router.route('/').get((req, res) => {
    peventsh.find()
        .then(peventsh => res.json(peventsh))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;