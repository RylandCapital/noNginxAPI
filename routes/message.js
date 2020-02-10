var mongoose = require('mongoose');
var Message = require('../models/spx.ml.model');

app.post('/message', (req, res) => {
  var newMessage = new Message(req.body);
  newMessage.save((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});