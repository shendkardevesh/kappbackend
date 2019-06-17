var express = require('express');
var router = express.Router();
let indexCtrl = require('../controller/index');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert', function(req, res) {
  console.log(req.body);
  indexCtrl.save(req.body)
    .then(success => {
      console.log(success);
      res.jsonp(success);
    })
    .catch(err => {
      res.status(400).send({error: err});
    })
});

module.exports = router;
