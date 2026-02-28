const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

module.exports = class User {
    constructor(title) {
        this.title = title;
    }

    save() {
        const p = path.join(rootDir, 'data', 'userdata.json');
        
        fs.readFile(p, (err, fileContent) => {
            let user = [];
            
            if (!err) {
                user = JSON.parse(fileContent);  // Existing user data
            }
            
            user.push(this);  // Add new user
            
            fs.writeFile(p, JSON.stringify(user), (err) => {
                console.log(err);  // Log any errors
            });
        });
    }

    static fetchAll(cb) {
        const p = path.join(rootDir, 'data', 'userdata.json');
        
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
                //return [];
            } else {
                cb(JSON.parse(fileContent));
                //return JSON.parse(fileContent);
            }
           // cb(JSON.parse(fileContent));
        });
    }
};