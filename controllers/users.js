const User = require('../models/user-working');

//const users = [];

exports.getAddUser = (req, res) => {
    res.render('add-user', {
        pageTitle: 'Add User',
    })};

exports.postAddUser = (req, res) => {
    const user = new User(req.body.title);
    user.save();
    res.redirect('/');
};

exports.getUsers = (req, res) => {
    console.log('🚀 getUsers called');
    
    User.fetchAll((users) => {
        console.log('📦 fetchAll callback received:', users);
        console.log('📦 users length:', users.length);
        
        res.render('user', {
            pageTitle: 'Users',
            users: users
        });
        console.log('✅ Response rendered');
    });
    
    console.log('⏳ Waiting for fetchAll callback...');
};
// exports.getUsers = (req, res) => {
//     console.log('getUsers controller called!');  // ← Add this
    
//     User.fetchAll((users) => {
//         console.log('Users from fetchAll:', users);  // ← You already have this
//         console.log('Users length:', users.length);  // ← Add this
        
//         res.render('users', {
//             pageTitle: 'Users',
//             users: users
//         });
//     });
// };


//exports.getUsers = (req, res) => {
    // res.render('users', {
    //     pageTitle: 'Users',
    //     users: users
    // });
    // const user = User.fetchAll();
    // res.render('users', {
    //     pageTitle: 'Users',
    //     users: user
    // });

    // User.fetchAll((users) => {
    //     res.render('users', {
    //         pageTitle: 'Users',
    //         users: users
    //     });
    // });

    // User.fetchAll((users) => {
    //     res.render('users', {
    //         pageTitle: 'Users',
    //         users: users
    //     });
    // });
//}

//exports.users = users;