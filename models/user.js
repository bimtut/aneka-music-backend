const conn = require('../configs/db');

const userModel = {
    register: (body) => {
        const name = body.name;
        const email = body.email;
        const password = body.password;
        const level = body.level;

        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO user (name, email, password, level) VALUES (?,?,?,?)', [name, email, password, level], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    getUserByEmail: (email) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM user WHERE email=?', email, (err, result) => {
                if(!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    getLastID: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT MAX (id) FROM user', (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    login: (email, password) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM user WHERE email=? AND password=?', [email, password], (err, result) => {
                if(!err){        
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    
}

module.exports = userModel;