var express = require('express');
var app = express();

app.use(require('stylus').middleware('public'))

app.get("*",  function(req, res){
  res.render('public/index')
});

app.listen(process.argv[2]);
