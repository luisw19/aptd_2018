# aptd_2018
This is the source code for the demo made at [API The Docs London 2018](https://apithedocs.org/london2018).

Steps to create the project:

1) Initiate node project by running:
```bash
npm init
```
and set "server.js" as entry point.

> This assumes you have Node Package Manager (NPM)
> already installed. If not, you can find instruccions
> [here](https://www.npmjs.com/get-npm) on how to install it.

2) Install Express server:
```bash
npm install --save express
```

3) Install Body Parser server:
```bash
npm install --save body-parser
```

4) Create server.js:
```bash
touch server.js
```

5) Modify server.js as following to create the base server that offers / and /orders:

```javascript
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
    var response = [{
        "order": "0001"
      },
      {
        "order": "0002"
      }
    ];
    res.json(response);
  });

// Start the server
app.use('/', router);
app.listen(3000);
console.log("Listening to PORT 3000");
```

6) Run to test node app
```bash
npm start
```

7) Open a new terminal and test URL with curl (or use postman or simply use the browser)
```bash
curl http://localhost:3000
curl http://localhost:3000/orders
```
# demo_aptd
