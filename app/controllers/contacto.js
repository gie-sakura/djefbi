/**
 * Created by AnHellLycan on 22/08/16.
 */
var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/contacto', function (req, res, next) {
  res.render('contacto', {
    title: 'Contacto'
  });
});
