var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();

//base resource
router.get('/', function(req, res) {
  var response = {
    "status": "OK",
    "uptime": process.uptime()
  };
  res.json(response);
});

//orders resource
router.route("/orders")
  // GET method
  .get(function(req, res) {
    var response =
      [
        {"order": "0001"},
        {"order": "0002"}
      ];
    res.json(response);
  });

// Start the server
app.use('/', router);
app.listen(3000);
console.log("Listening to PORT 3000");
