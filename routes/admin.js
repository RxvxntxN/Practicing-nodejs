const express = require('express');
const router = express.Router();
const path = require('path');

// /admin/add-user => GET

router.get('/add-user',(req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-user.html'));
});

// /admin/add-user => POST

router.post('/add-user',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;