const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const p = path.join(__dirname, '..', 'data', 'userdata.json');
        
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
        const p = path.join(__dirname, '..', 'data', 'userdata.json');
        
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
                return [];
            }
            return JSON.parse(fileContent);
        });
    }
};