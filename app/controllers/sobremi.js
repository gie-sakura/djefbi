var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/sobremi', function (req, res, next) {
  res.render('sobremi', {
    title: 'Sobre mí'
  });
});
