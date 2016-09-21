var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.Account.findById("2").then(function(users){
    if(users){
      res.send(users);
    }else{
      res.send("NotFound");
    }
  });
});

module.exports = router;
