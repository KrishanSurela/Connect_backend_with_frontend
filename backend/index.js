//const express = require('express')
import express from "express"; //error aayegi so we have to add "type":"module"  to the package.json file ,module js ki tarah asemble krne ke liye use lete hai
//require("dotenv").config();  require is not defined in ES module scope, you can use import instead

import "dotenv/config"; //for using ES6

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

//get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "this is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "this is another joke",
    },
    {
      id: 3,
      title: "A Third joke",
      content: "this is a Third joke",
    },
    {
      id: 4,
      title: "A Fourth joke",
      content: "this is 4th joke",
    },
    {
      id: 5,
      title: "A 5th joke",
      content: "this is 5th joke",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
