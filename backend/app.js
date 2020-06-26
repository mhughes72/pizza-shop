const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();

mongoose
  .connect(
    "mongodb+srv://mhughes:7ant147H@mattcluster-crvln.mongodb.net/meanstackpizza?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/pizza", (req, res, next) => {
  const post = new Post({

    name: req.body.name,
    subName: req.body.subName,
    description: req.body.description,
    imagePath: req.body.imagePath,
    toppings: req.body.toppings

  });
  console.log('POST: ', post)
  post.save().then(createdPost => {
    res.status(201).json({
      message: post,
      postId: createdPost._id
    });
  });
});

app.get("/api/pizza", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: documents,
      posts: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

module.exports = app;
