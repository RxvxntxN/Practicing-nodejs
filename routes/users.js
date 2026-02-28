const path = require('path');
const express = require('express');
const router = express.Router();
//const rootDir = require('../util/path');
//const adminData = require('./admin');
const userController = require('../controllers/users');


router.get('/', userController.getUsers);

//router.get('/',(req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'users.html'));
    //console.log(adminData.users);
    // console.log('Users array:', adminData.users);
    // console.log('Users count:', adminData.users.length);
    //res.render('user', {users: userController.users, userTitle: 'UserList'});
    //router.get('/', userController.getUsers);
//});

module.exports = router;