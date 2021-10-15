const express = require("express");
const bodyParser = require("body-parser");
const mySqlConnection = require("./connection");
const userRouts = require("./routes/user");
const itemRouts = require("./routes/item");
const orders = require("./routes/orders");


var app = express();
app.use(bodyParser.json());

app.use("/user", userRouts);
app.use("/item", itemRouts);
app.use("/order", orders);



app.listen(3000)