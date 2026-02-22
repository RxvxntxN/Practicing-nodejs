const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/user-lists',(req, res, next) => {
    res.send(`<form action="/users" method="POST">
            <input type="text" name="title">
            <button type="submit">Add User Name</button>
        </form>`);
});


app.use('/users',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
res.send('<h1>Hello from main page: / </h1>');
});

app.listen(3000);