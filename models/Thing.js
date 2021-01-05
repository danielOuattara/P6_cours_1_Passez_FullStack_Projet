
// P2C2: Enregistrer et récuperer des données
// P2C3: Enregistrer er récuperer des données

const mongoose = require('mongoose');
const thingSchema = mongoose.Schema({
    title:       {type: String, required: true},
    description: {type: String, required: true},
    imageUrl:    {type: String, required: true},
    userId:      {type: String, required: true},
    price:       {type: Number, required: true},
})

module.exports = mongoose.model('Thing', thingSchema);