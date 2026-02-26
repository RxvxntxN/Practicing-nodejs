const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/',(req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'users.html'));
    //console.log(adminData.users);
    console.log('Users array:', adminData.users);
    console.log('Users count:', adminData.users.length);
    res.render('user', {users: adminData.users, userTitle: 'UserList'});
});

module.exports = router;