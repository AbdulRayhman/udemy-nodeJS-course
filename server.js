const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
app.use((req, res,next)=>{
  console.log('In the Middleware!')
  next()
})
app.use((req, res,next)=>{
  console.log('In the another Middleware!')
})
server.listen(9000);