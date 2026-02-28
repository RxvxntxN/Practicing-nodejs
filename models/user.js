const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

// 1️⃣ Helper function - written ONCE!
const getUsersFromFile = (cb) => {
    const p = path.join(rootDir, 'data', 'userdata.json');
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class User {
    constructor(title) {
        this.title = title;
    }

    save() {
        // 2️⃣ Use helper in save
        getUsersFromFile((users) => {
            users.push(this);
            const p = path.join(rootDir, 'data', 'userdata.json');
            fs.writeFile(p, JSON.stringify(users), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        // 3️⃣ Use helper in fetchAll
        getUsersFromFile(cb);
    }
};

// Everything is the same as before, except we now have a single helper function to read users from the file, which is used in both save() and fetchAll() methods. This eliminates code duplication and keeps our code DRY (Don't Repeat Yourself).