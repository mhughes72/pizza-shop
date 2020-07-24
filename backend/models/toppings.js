const mongoose = require('mongoose');

const toppingsSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true },


});


module.exports = mongoose.model('Toppings', toppingsSchema);






