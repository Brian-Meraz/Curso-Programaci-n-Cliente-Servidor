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
        required: [true, 'El campo Nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El campo Email es obligatorio'],
        //lowercase: true,
        //validate: [validateEmail, 'Por favor ingrese un email valido'],
        //match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/]
    },
    
    type: {
        type: String,
        enum: ['Alumno','Maestro'],
    }
});

var Zombie = mongoose.model("Zombie",modelSchema);
module.exports = Zombie;