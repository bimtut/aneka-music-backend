const conn = require('../configs/db');

const branchModel = {
    getBranch: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM branch', (err, result) => {
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
            conn.query('SELECT MAX (id) FROM branch', (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    addBranch: (location) => {
        let query = `INSERT INTO branch (location) VALUES ('${location}')`;

        return new Promise((resolve, reject) => {
            conn.query(query, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    editBranch: (id, location) => {
        let query = `UPDATE branch SET location='${location}' WHERE id='${id}'`;

        return new Promise((resolve, reject) => {
            conn.query(query, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    deleteBranch: (id) => {
        let query = `DELETE FROM branch WHERE id='${id}'`;

        return new Promise((resolve, reject) => {
            conn.query(query, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    }
}

module.exports = branchModel;