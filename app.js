const express = require('express');
const path = require('path');

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
  res.status(404).send('<h1>Page Not Found!</h1>');
});

app.listen(9000);
