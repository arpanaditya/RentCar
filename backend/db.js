const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
function connectDB() {
  mongoose.connect(
    "mongodb+srv://arpanaditya:arpanaditya@cluster0.1fjvmrp.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });
  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}
connectDB();
module.exports = mongoose;
