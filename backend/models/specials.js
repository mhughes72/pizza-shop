const mongoose = require('mongoose');

const specialsSchema = mongoose.Schema({
  name: { type: String, required: true },
  subName: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true },

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


module.exports = mongoose.model('Specials', specialsSchema);






