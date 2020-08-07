const mongoose = require('mongoose');

const toppingsSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imagePath: { type: String },


});


module.exports = mongoose.model('Toppings', toppingsSchema);






