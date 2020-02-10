const router = require('express').Router();
let spxml = require('../models/spx.ml.model');

router.route('/').get((req, res) => {
    spxml.find()
    .then(spxml => res.json(spxml))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const long_proba_1 = req.body.long_proba_1;
    const long__index = req.body.long__index;
    const short_proba_1 = req.body.short_proba_1;
    const long_short_proba = req.body.long_short_proba;
  
    const newspxml = new spxml({long_proba_1,
        long__index,
        short_proba_1,
        long_short_proba
    });
  
    newspxml.save()
      .then(() => res.json('Value added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;