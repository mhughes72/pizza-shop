const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Pizza = require("./models/pizza");
const Salad = require("./models/salad");
const Sides = require("./models/sides");
const Specials = require("./models/specials");
const Toppings = require("./models/toppings");

var cors = require('cors');
const { resolve } = require("path");

const app = express();

mongoose
  .connect(
    // "mongodb+srv://mhughes:" + process.env.MONGO_ATLAS_PW + "@mattcluster-crvln.mongodb.net/meanstackpizza?retryWrites=true&w=majority"

    "mongodb+srv://mhughes:7ant147H@mattcluster-crvln.mongodb.net/meanstackpizza?retryWrites=true&w=majority"
  )
  .then(() => {
  })
  .catch((e) => {
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );


  next();
});

app.post("/api/pizza", (req, res, next) => {
  const pizza = new Pizza({

    name: req.body.name,
    subName: req.body.subName,
    description: req.body.description,
    imagePath: req.body.imagePath,
    toppings: req.body.toppings,
    calories: req.body.calories,
    fat: req.body.fat,
    transfat: req.body.transfat,
    sodium: req.body.sodium,
    price: req.body.price,
    toppings: req.body.toppings,

  });

  pizza.save().then(createdPizza => {
    res.status(201).json({
      message: pizza,
      postId: createdPizza._id
    });
  });
});

app.get("/api/pizza", (req, res, next) => {
  Pizza.find().then(documents => {
    res.status(200).json({
      pizza: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Pizza.deleteOne({ _id: req.params.id }).then(result => {

    res.status(200).json({ message: "Post deleted!" });
  });
});


app.post("/api/salad", (req, res, next) => {

  const salad = new Salad({

    name: req.body.name,
    subName: req.body.subName,
    description: req.body.description,
    imagePath: req.body.imagePath,
    calories: req.body.calories,
    fat: req.body.fat,
    transfat: req.body.transfat,
    sodium: req.body.sodium,
    price: req.body.price,
    toppings: req.body.toppings,

  });


  salad.save().then(createdSalad => {
    res.status(201).json({
      message: salad,
      postId: createdSalad._id
    });
  });
});

app.get("/api/salad", (req, res, next) => {
  Salad.find().then(documents => {
    res.status(200).json({
      salad: documents
    });
  });
});


app.post("/api/sides", (req, res, next) => {

  //
  const sides = new Sides({

    name: req.body.name,
    subName: req.body.subName,
    description: req.body.description,
    imagePath: req.body.imagePath,

    calories: req.body.calories,
    fat: req.body.fat,
    transfat: req.body.transfat,
    sodium: req.body.sodium,
    price: req.body.price,

    toppings: req.body.toppings

  });

  sides.save().then(createdSides => {
    res.status(201).json({
      message: sides,
      postId: createdSides._id
    });
  });
});

app.get("/api/sides", (req, res, next) => {
  Sides.find().then(documents => {
    res.status(200).json({
      sides: documents
    });
  });
});


app.post("/api/specials", (req, res, next) => {
  //
  //
  const specials = new Specials({

    name: req.body.name,
    subName: req.body.subName,
    description: req.body.description,
    imagePath: req.body.imagePath,

    calories: req.body.calories,
    fat: req.body.fat,
    transfat: req.body.transfat,
    sodium: req.body.sodium,
    price: req.body.price,


    toppings: req.body.toppings

  });

  specials.save().then(createdSpecials => {

    res.status(201).json({
      message: specials,
      postId: createdSpecials._id
    });
  }).catch((e) => {

  });
});

app.get("/api/specials", (req, res, next) => {
  Specials.find().then(documents => {
    res.status(200).json({
      specials: documents
    });
  });
});

app.post("/api/toppings", (req, res, next) => {

  //
  const toppings = new Toppings({

    name: req.body.name,
    subName: req.body.subName,
    description: req.body.description,
    imagePath: req.body.imagePath,

    calories: req.body.calories,
    fat: req.body.fat,
    transfat: req.body.transfat,
    sodium: req.body.sodium,
    price: req.body.price,


    toppings: req.body.toppings

  });

  toppings.save().then(createdToppings => {

    res.status(201).json({
      message: toppings,
      postId: createdToppings._id
    });
  }).catch((e) => {

  });
});

app.get("/api/toppings", (req, res, next) => {
  Toppings.find().then(documents => {
    res.status(200).json({
      toppings: documents
    });
  });
});



module.exports = app;
