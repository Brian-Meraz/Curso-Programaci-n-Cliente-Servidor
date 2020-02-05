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



var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    description: {
        type: String,
        min: [10, 'La descripcion es muy corta'],
        max: [50, 'La descripcion es muy larga'],
        required: [true, 'Este campo es obligatorio!']
    },
    flavor: {
        type: String,
        min: [3, 'El tipo de sabor es muy corto'],
        max: [20, 'El tipo de sabor es muy largo'],
        required: [true, 'Este campo es obligatorio']
    },
    price: {
        type: String,
        min: [1, 'El precio es muy chico'],
        max: [10, 'El precio es demasiado caro'],
        required: [true, 'Este campo es obligatorio']
    },
    picture: {
        type: String,
        min: [0,'!!!!!'],
        max: [100, 'Demasiados caracteres!'],
        required: [true, 'Este campo es obligatorio']
    }
});

var Cerebro = mongoose.model("Cerebro",modelSchema);
module.exports = Cerebro;