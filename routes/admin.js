// import Express from 'express';
const Express = require('express');

const router = Express.Router();

router.use('/add-product', (req, res, next) => {
  res.send(`<form action="/products" method="POST" >
              <input type="text" name="title"/>
              <button type="submit">Submit</button>
            </form>`);
});

router.post('/products', (req, res, next) => {
  console.log(req.body);
  res.redirect('/'); // GO TO MAIN ROUTE
});

module.exports = router;
