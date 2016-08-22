/**
 * Created by sakura on 21/08/16.
 */
var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/blog', function (req, res, next) {
  res.render('blog', {
    title: 'Blog'
  });
});
