const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/users');

app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(3000);