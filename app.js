var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");
var crypto = require("crypto");
var async = require("async");
var path = require("path");

var sendMessage = require("./lib/sendMessage.js");
var messageTemplate = require("./lib/messageTemplate.js");
var gnavi = require("./lib/gnaviapi.js");
//var pgManager = require('./lib/postgresManager.js'); // データベースを使う時に必要

// utilモジュールを使います。
var util = require("util");

app.set("port", process.env.PORT || 8000);
// JSONの送信を許可
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// JSONパーサー
app.use(bodyParser.json());

app.get("/", function (req, res) {
  // herokuのルートディレクトリにアクセスした時に表示される
  res.send("<h1>LINE BOT の開発セミナーへようこそ</h1>");
});

app.get("/index", function (request, response) {
  response.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/home", function (request, response) {
  response.sendFile(path.join(__dirname + "/views/home.html"));
});
