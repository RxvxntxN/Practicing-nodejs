const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('just a middleware!');
    next();
});

app.use('/user-lists',(req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>This is User Lists page !</h1>');
});


app.use('/users',(req, res, next) => {
    console.log('In 2nd middleware!');
    res.send('<h1>This is Users page !</h1>');
});

app.use('/',(req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);