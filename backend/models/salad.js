const mongoose = require('mongoose');

const saladSchema = mongoose.Schema({
  name: { type: String, required: true },
  subName: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true },
  toppings: [{

    name: { type: String, required: true },
    description: { type: String, required: true },
    imagePath: { type: String, required: true },
  }]


});


module.exports = mongoose.model('Salad', saladSchema);










