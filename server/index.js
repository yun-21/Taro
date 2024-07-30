"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, '../client/dist')));
app.post('/send', function (req, res) {
    var data = req.body;
    console.log(data);
    res.json({ message: "성공적" });
});
app.listen(8080, function () {
    console.log("Server is running at http://localhost:8080");
});
