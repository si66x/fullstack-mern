require("dotenv").config();
const Person = require("./model/phonebook");
const express = require("express");
const app = express();
const cors = require("cors");

const unknownEndpoint = (req, res) => {
  res.status(404).send({
    error: "unkown endpoint",
  });
};

const requestLogger = (req, res, next) => {
  const logger = {
    path: req.path,
    body: req.body,
    method: req.method,
  };
  console.log(logger);
  next();
};

const handleError = (err, req, res, next) => {
  console.log(err.message);
  if (err.name == "CastError") {
    return res.status(400).send({
      error: "malformatted id",
    });
  } else if (err.name === "ValidationError") {
    return res.status(404).send({
      error: err.message,
    });
  }
  next(err);
};

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use(requestLogger);

const persons = [
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/", (req, res) => {
  res.send("Test");
});

app.get("/api/persons", (req, res) => {
  Person.find().then((result) => res.json(result));
});

app.post("/api/persons", (req, res, next) => {
  const body = req.body;
  if (!body.name) {
    res.status(404).send({
      error: "Missing content",
    });
  } else {
    const person = new Person({
      name: body.name,
      number: body.number,
      important: body.important || false,
    });
    person.save().then((result) => res.json(result));
  }
});

app.get("/api/persons/:id", (req, res, next) => {
  const id = req.params.id;
  Person.findById(id)
    .then((result) => {
      if (!result) {
        res.status(404).end();
      } else {
        res.json(result);
      }
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  Person.findByIdAndDelete(id).then((result) => {
    res.json(result);
  });
});

PORT = 3002;

app.use(unknownEndpoint);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`listening to port number ${PORT}`);
});
