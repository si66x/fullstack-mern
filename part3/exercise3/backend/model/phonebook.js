const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const phonebookSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  number: {
    type: String,
    minLength: 8,
    required: [true, "user phone number required"],
    validate: {
      validator: function (v) {
        return /\d{2}-\d{2}/.test(v);
      },
    },
  },
});

phonebookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("People", phonebookSchema);
