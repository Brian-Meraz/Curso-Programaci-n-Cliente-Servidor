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