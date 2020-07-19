const mongoose = require('mongoose');

const saladSchema = mongoose.Schema({
  name: { type: String, required: true },
  subName: { type: String },
  description: { type: String },
  imagePath: { type: String },

  calories: { type: Number},
  fat: { type: Number},
  transfat: { type: Number},
  sodium: { type: Number},
  price: { type: Number},

  toppings: [{

    name: { type: String, required: true },
    description: { type: String, required: true },
    imagePath: { type: String, required: true },
  }]


});



module.exports = mongoose.model('Salad', saladSchema);










