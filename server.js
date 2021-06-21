const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/', (req, res, next) => {
  console.log('This is always RUN!!!!');
  next();
});
app.use('/addUser', (req, res, next) => {
  res.send('<form action="/users" method="POST" ><input type="text" name="title"/><button type="submit">Submit</button></form>');
});
app.use('/users', (req, res, next) => {
  console.log(req.body);
  res.send('<h1>Hello From User Page</h1>');
});
app.use('/', (req, res, next) => {
  res.send('<h1>Hello From Expresss</h1>');
  next();
});

app.listen(9000);
