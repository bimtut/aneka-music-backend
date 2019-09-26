const conn = require('../configs/db');

const categoriesModel = {
    
    getCategories: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM category', (err, result) => {
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
            conn.query('SELECT MAX (id) FROM category', (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    addCategory: (body) => {
        const name = body.name;
        const image = body.image;
        
        let query = `INSERT INTO category (name, image) VALUES ('${name}', '${image}')`;

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

    editCategory: (id, body) => {
        const name = body.name;
        const image = body.image;

        let query = `UPDATE category SET name='${name}', image='${image}' WHERE id='${id}'`;

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

    deleteCategory: (id) => {
        let query = `DELETE FROM category WHERE id='${id}'`;

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

module.exports = categoriesModel;