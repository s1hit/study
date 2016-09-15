var express = require('express');
var joi = require('joi');
var router = express.Router();

/* login */
router.post('/', function(req, res, next) {
  var schema = joi.object().keys({
    userName: joi.string().required().label('ユーザー名'),
    password: joi.string().required().label('パスワード')
  });

  joi.validate(req.body, schema, options, function (err, value) {
    console.log(err);
    console.log(err.details.message);
    if (err) {
      // バリデーションエラー
      res.render('index', {title: 'Express', error: err.details[0].message});
    } else {
      res.render('menu', {title: 'OK'});
    }
  });
});

module.exports = router;
