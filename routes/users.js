const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/',(req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'users.html'));
    console.log(adminData.users);
    res.render('users', {users: adminData.users, pageTitle: 'Users'});
});

module.exports = router;