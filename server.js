require('dotenv').config()

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var cors = require("cors");
app.use(cors());

require("./config/db");

var Api = express.Router();
app.use("/api", Api);
const params = {
  api: Api
};
require("./api/api")(params);

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})