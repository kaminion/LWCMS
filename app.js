const express = require('express');
const path = require("path");
const app = express();

// sequelize 불러오기
const sequelize = require(path.join(__dirname, "./server/models")).sequelize;
sequelize.sync();

// 리액트로..
app.use("/", express.static(path.join(__dirname, "./client/views")));

app.get("/", (req, res) => {

    res.json({abc:"sad"})
});





module.exports = app;