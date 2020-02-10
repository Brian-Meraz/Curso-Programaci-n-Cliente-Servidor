var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    description: {
        type: String,
        minlength: [10, 'La descripcion es muy corta'],
        maxlength: [50, 'La descripcion es muy larga'],
        required: [true, 'El campo descripción es obligatorio!']
    },
    flavor: {
        type: String,
        enum: ['Fresa','Chocolate','Vainilla','Pistache','fresa','chocolate','vainilla','pistache']
    },
    price: {
        type: String,
        minlength: [2, 'El precio es muy chico'],
        maxlength: [10, 'El precio es demasiado caro'],
        required: [true, 'El campo precio es obligatorio']
    },
    picture: {
        type: String,
        minlength: [0,'Introduce un texto xd'],
        maxlength: [100, 'Demasiados caracteres!'],
        required: [true, 'El campo Imagen es obligatorio']
    }
});

var Cerebro = mongoose.model("Cerebro",modelSchema);
module.exports = Cerebro;