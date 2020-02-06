var express = require('express');
var router = express.Router();

var Zombie = require("../models/zombie") //Modelo zombie
var Cerebro = require("../models/cerebro")  //Modelo cerebro

/* GET home page. */
router.get('/', function(req, res, next) {
  Zombie.find().exec(function(error,zombies){
    if(!error){
      res.render('index', { title: 'Brian',curso:'Programacion c/s',viewZombies: zombies});
    }
  });
});

/*Agregar nuevo zombie */
router.get('/zombies/add',function(req, res){
  res.render('add');
});

/* Guardar zombie en la base de datos*/
router.post('/zombies/new',function(req, res){
  var data = req.body;

  var nuevoZombie = new Zombie({
    name: data.name,
    email: data.email,
    type: data.type
  });

  nuevoZombie.save(function(error){
    if(error){
      mensaje = error.errors.name.message;
      res.render('add', {mensajeError: mensaje})
    }
    else{
      res.render('add', {msg: 'Se agrego el zombie con exito!'});
    }
    
  });  
});

/* get page Cerebros */
router.get('/cerebros', function(req, res) {
  Cerebro.find().exec(function(error,cerebros){
    if(!error){
      res.render('cerebros/index', { viewCerebros: cerebros});
    }
  });
});

router.get('/cerebros/add',function(req, res){
  res.render('cerebros/add_cerebros',{obj: ''});
});

/* Guardar nuevo cerebro */
router.post('/cerebros/new', function(req,res){
  var dato = req.body;

  var nuevoCerebro = new Cerebro({
    description: dato.description,
    flavor: dato.flavor,
    price: dato.price,
    picture: dato.picture
  });

  nuevoCerebro.save().then(function(){
    res.render('cerebros/add_cerebros', {obj: 'Se agrego el cerebro con exito!'});
  });

});

/* Eliminar cerebro */

/* Modificar cerebro */
module.exports = router;
