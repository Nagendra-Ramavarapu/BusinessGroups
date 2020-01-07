//Declare required things
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

//create Express server
const app = express();
const port = process.env.PORT || 5000;

//Middleware as cors and express (since server recieves in json '.json' is used)
app.use(cors());
app.use(express.json());

//Add mongodb URI
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection status: Success");
});

const UsersRouter = require("./Routes/Users");
const GroupsRouter = require("./Routes/GroupsList");
const NewsFeedRouter = require("./Routes/NewsFeed");
const TransactionRouter = require("./Routes/Transactions");

app.use("/Users", UsersRouter);
app.use("/Groups", GroupsRouter);
app.use("/NewsFeed", NewsFeedRouter);
app.use("/Transactions", TransactionRouter);

//starts the server
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
