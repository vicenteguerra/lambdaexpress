const express = require('express');
const router = express.Router();
const pjson = require('../package.json');
const fs = require("fs");
const API_ROUTER_PATH = __dirname + "/V1";

/* GET Health Check. */
router.get('/', function(req, res, next) {
  return res.json({
    "health": 1,
    "subject": `${pjson.name}: v${pjson.version} is Healthy`
  })
});

fs.readdirSync(API_ROUTER_PATH)
    .forEach(function(file) {
      require(`${API_ROUTER_PATH}/${file}`)(router);
    });

module.exports = router;

/*
    You can create another folder and add the following snippet if you need group endpoints by business logic for example

    const API_ROUTER_PATH_2 = __dirname + "/V2";

    fs.readdirSync(API_ROUTER_PATH_2)
        .forEach(function(file) {
            require(`${API_ROUTER_PATH_2}/${file}`)(router);
        });
 */

module.exports = router;
