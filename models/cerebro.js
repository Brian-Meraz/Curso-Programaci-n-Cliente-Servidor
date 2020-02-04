var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    description: String,
    flavor: String,
    price: String,
    picture: String
});

var Cerebro = mongoose.model("Cerebro",modelSchema);
module.exports = Cerebro;