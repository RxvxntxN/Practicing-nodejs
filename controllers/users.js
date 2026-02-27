
const users = [];

exports.getAddUser = (req, res) => {
    res.render('add-user', {
        pageTitle: 'Add User',
    })};

exports.postAddUser = (req, res) => {
    users.push({ name: req.body.title });
    res.redirect('/');
};


exports.getUsers = (req, res) => {
    res.render('users', {
        pageTitle: 'Users',
        users: users
    });
}

exports.users = users;