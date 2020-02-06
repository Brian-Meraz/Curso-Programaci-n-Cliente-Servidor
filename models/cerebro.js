var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    description: {
        type: String,
        minlength: [10, 'La descripcion es muy corta'],
        maxlength: [50, 'La descripcion es muy larga'],
        required: [true, 'Este campo es obligatorio!']
    },
    flavor: {
        type: String,
        minlength: [3, 'El tipo de sabor es muy corto'],
        maxlength: [20, 'El tipo de sabor es muy largo'],
        required: [true, 'Este campo es obligatorio']
    },
    price: {
        type: String,
        minlength: [1, 'El precio es muy chico'],
        maxlength: [10, 'El precio es demasiado caro'],
        required: [true, 'Este campo es obligatorio']
    },
    picture: {
        type: String,
        minlength: [0,'!!!!!'],
        maxlength: [100, 'Demasiados caracteres!'],
        required: [true, 'Este campo es obligatorio']
    }
});

var Cerebro = mongoose.model("Cerebro",modelSchema);
module.exports = Cerebro;