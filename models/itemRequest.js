const conn = require('../configs/db');

const itemRequestModel = {
    getAllRequests: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM itemrequest', (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    getLastID: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT MAX (id) FROM itemrequest', (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    newRequest: (body) => {
        const name = body.name;
        const email = body.email;
        const item = body.item;

        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO itemrequest (name, item, email) VALUES (?,?,?)', [name, item, email], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    requestFulfilled: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE itemrequest SET fulfilled=1 WHERE id=?', id, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    }
}

module.exports = itemRequestModel;