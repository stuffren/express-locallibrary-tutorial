var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.redirect("/catalog"); //我们将网站的首页重定向（redirect）至刚创建的地址 '/catalog'。
});

module.exports = router;
