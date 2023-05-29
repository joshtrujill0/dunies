//Required Variables
const express = require("express");
const app = express();
const path = require("path");
const viewRouter = require("./routes/viewRoutes");

//Middleware and view engine configurations
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);

//Routers
app.use("/", viewRouter);

module.exports = app;
