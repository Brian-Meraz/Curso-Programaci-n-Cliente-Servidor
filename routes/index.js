var express = require('express');
var router = express.Router();

var Zombie = require("../models/zombie")
var Cerebro = require("../models/cerebro")

/* GET home page. */
router.get('/', function(req, res, next) {
  Zombie.find().exec(function(error,zombies){
    if(!error){
      res.render('index', { title: 'Brian',curso:'Programacion c/s',viewZombies: zombies});
    }
  })
  
});

router.get('/cerebros', function(req, res, next) {
  Cerebro.find().exec(function(error,cerebros){
    if(!error){
      res.render('cerebros/index', { viewCerebros: cerebros});
    }
  })
  
});
router.get('/zombies/add',function(req, res){
  res.render('add',{msg:''});
});

router.post('/zombies/new',function(req, res){
  var data = req.body;

  var nuevoZombie = new Zombie({
    name: data.name,
    email: data.email,
    type: data.type
  });

  nuevoZombie.save().then(function(){
    res.render('add', {msg: '<div role="alert" class="alert alert-success">Se agrego el zombie con exito!</div>'});
    
  });
  
});



module.exports = router;
