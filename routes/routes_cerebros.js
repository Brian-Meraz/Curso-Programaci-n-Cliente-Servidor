var express = require('express');
var router = express.Router();

var Cerebro = require("../models/cerebro")  //Modelo cerebro

/* get page Cerebros */
router.get('/home', function(req, res) {
    Cerebro.find().exec(function(error,cerebros){
      if(!error){
        res.render('cerebros/index', { viewCerebros: cerebros});
      }
    });
  });
  
  router.get('/add',function(req, res){
    res.render('cerebros/add_cerebros');
  });
  
  /* Guardar nuevo cerebro */
  router.post('/new', function(req,res){
    var data = req.body;
  
    var nuevoCerebro = new Cerebro({
      description: data.description,
      flavor: data.flavor,
      price: data.price,
      picture: data.picture
    });
  
    nuevoCerebro.save(function(error){
      if(error.errors.description){
        mensaje = error.errors.description.message;
        res.render('cerebros/add_cerebros', {mensajeError: mensaje})
      }
      if (error.errors.flavor){
        mensaje = error.errors.flavor.message;
        res.render('cerebros/add_cerebros', {mensajeError: mensaje})
      }
      if (error.errors.price){
        mensaje = error.errors.price.message;
        res.render('cerebros/add_cerebros', {mensajeError: mensaje})
      }
      if (error.errors.picture){
        mensaje = error.errors.picture.message;
        res.render('cerebros/add_cerebros', {mensajeError: mensaje})
      }
      else{
        res.render('cerebros/add_cerebros', {obj: 'Se agrego el cerebro con exito!'});
      }

      
    });
  
  });
  
  /* Eliminar cerebro */
  
  /* Modificar cerebro */



module.exports = router;
