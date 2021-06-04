const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
//import routes
const postRoutes = require("./routes/posts");

//app middleware
app.use(bodyParser.json());
app.use(cors());

//routes middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL =
  "mongodb+srv://mm:mm@mernapp.txrfe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB connection error", err));

app.listen(PORT, () => {
  console.log(`App is runing ${PORT}`);
});
