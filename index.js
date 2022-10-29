const express = require("../../node_modules/express");
const app = express();
const server = require("http").Server(app);
const io = module.exports.io = require('../../node_modules/socket.io/lib')(server)
const path = require("path")

app.use(express.static(path.join(__dirname, '../../build')));
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../build')));
    console.log("DEBUG HERE", __dirname, path.join(__dirname+'../../build'));
    //
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname+'../../build/index.html'));
    })
  }
  //build mode
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'../../public/index.html'));
  })
