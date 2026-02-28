const User = require('../models/user');

const users = [];

exports.getAddUser = (req, res) => {
    res.render('add-user', {
        pageTitle: 'Add User',
    })};

exports.postAddUser = (req, res) => {
    //users.push({ name: req.body.title });
    User.fetchAll((users) => {
        const user = new User(req.body.title);
        user.save();
       
    });
     res.redirect('/');
    // const user = new User(req.body.title);
    // user.save();
    // res.redirect('/');
};


exports.getUsers = (req, res) => {
    // res.render('users', {
    //     pageTitle: 'Users',
    //     users: users
    // });
    const user = User.fetchAll();
    res.render('users', {
        pageTitle: 'Users',
        users: user
    });
}

exports.users = users;