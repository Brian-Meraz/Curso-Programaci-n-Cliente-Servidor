var express = require('express');
var router = express.Router();

var Zombie = require("../models/zombie")
var Cerebro = require("../models/cerebro")

/* GET home page. */
router.get('/', function(req, res, next) {
  Zombie.find().exec(function(error,zombies){
    if(!error){
      console.log(zombies);
      res.render('index', { title: 'Brian',curso:'Programacion c/s',viewZombies: zombies});
    }
  })
  
});

router.get('/cerebros', function(req, res, next) {
  Cerebro.find().exec(function(error,cerebros){
    if(!error){
      console.log(cerebros);
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
    res.render('add', {msg: 'Se agrego un zombie con exito!'});
    
  });

});

router.get('/prueba', function(req,res){
  res.send(<h1></h1>)
});



module.exports = router;








var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    name: {
        type: String,
        min: [6,"El nombre es muy corto"],
        max: [20,"El nombre es muy largo"],
        required
        },
    email: String,
    type: String
});

var Zombie = mongoose.model("Zombie",modelSchema);
module.exports = Zombie;