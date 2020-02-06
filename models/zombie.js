var mongoose = require('mongoose');

/*const validateEmail = function(email){
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    return re.test(email);
}*/

var modelSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: [6,"El nombre es muy corto"],
        maxlength: [20,"El nombre es muy largo"],
        required: [true, 'Este campo es obligatorio']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Este campo es obligatorio'],
        //lowercase: true,
        //validate: [validateEmail, 'Por favor ingrese un email valido'],
        //match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/]
    },
    
    type: {
        type: String,
        enum: ['Alumno','Maestro'],
        //minlength: [6,"El tipo de zombie ingresado contiene menos de 6 letras"],
        //maxlength: [50,"El tipo de zombie ingresado contiene mas de 50 letras"],
        required: [true, 'Este campo es obligatorio']
    }
});

var Zombie = mongoose.model("Zombie",modelSchema);
module.exports = Zombie;