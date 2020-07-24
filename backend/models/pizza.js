const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
  name: { type: String, required: true },
  subName: { type: String},
  description: { type: String },
  imagePath: { type: String},

  calories: { type: Number },
  fat: { type: Number },
  transfat: { type: Number },
  sodium: { type: Number },
  price: { type: Number },

  toppings: [{

    name: { type: String},
    description: { type: String },
    imagePath: { type: String },
  }]


});


module.exports = mongoose.model('Pizza', pizzaSchema);






