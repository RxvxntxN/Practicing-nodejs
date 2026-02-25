const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');


const users = [];

// /admin/add-user => GET

router.get('/add-user',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-user.html'));
});

// /admin/add-user => POST

router.post('/add-user',(req, res, next) => {
    //console.log(req.body);
    users.push({name: req.body.name});
    res.redirect('/');
});

//module.exports = router;

module.exports = {
    routes: router,
    users: users
};