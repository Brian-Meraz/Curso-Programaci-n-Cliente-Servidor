var express = require('express');
var router = express.Router();

var Zombie = require("../models/zombie") //Modelo zombie

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
    if(error.errors.name){
      mensaje = error.errors.name.message;
      res.render('add', {mensajeError: mensaje})
    }
    if (error.errors.email){
      mensaje = error.errors.email.message;
      res.render('add', {mensajeError: mensaje})
    }
    if (error.errors.email){
      mensaje = error.errors.email.message;
      res.render('add', {mensajeError: mensaje})
    }
    else{
      res.render('add', {msg: 'Se agrego el zombie con exito!'});
    }
    
  });  
});

// Modificar zombies
router.get('/zombies/edit/:id',async function(req, res){
  var zombie = await Zombie.findById(req.params.id);
  res.render('edit', {zombie, zombie});
});

router.put('/zombies/edit/:id',async function(req, res){
  try{
  var zombie = await Zombie.findById(req.params.id);
  zombie.name = req.body.name;
  zombie.email = req.body.email;
  zombie.type = req.body.type;

  await zombie.save();
  res.redirect('/');
  }
  catch(e){
    res.render('edit',{zombie: zombie});
  }
});



module.exports = router;
