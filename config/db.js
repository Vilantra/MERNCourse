const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  await mongoose.connect(
    db,
    {
      useNewUrlParser: true,
    },
    (err) => {
      if (err) throw err;
      console.log("Connected to MongoDB!!!");
    }
  );
};

module.exports = connectDB;
