//TODO Add database config
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.error(err));

module.exports = mongoose
