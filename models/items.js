const conn = require('../configs/db');

const itemsModel = {

    getItemsByCategory: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT id, name, image, category FROM item WHERE category=?',id, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    getItemsByBranch: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT item.id, item.name, item.image, item.category FROM item JOIN itemstock ON item.id = itemstock.item WHERE itemstock.branch=?',id, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    getItemsByName: (name) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT id, name, image, category FROM item WHERE name LIKE ?',['%' + name +'%'], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    getItemDetails: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT item.name, item.image, item.description, category.name as category, category.id as categoryID FROM item JOIN category ON item.category = category.id WHERE item.id=?',id, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    getItemStock: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT itemstock.branch as branchID, itemstock.price, itemstock.quantity, branch.location as branch FROM itemstock JOIN branch ON itemstock.branch = branch.id WHERE item=?',id, (err, result) => {
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
            conn.query('SELECT MAX (id) FROM item', (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    addItem: (body) => {
        const name = body.name;
        const image = body.image;
        const description = body.description;
        const category = body.category;

        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO item (name, image, description, category) VALUES (?,?,?,?)',[name, image, description, category], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    addItemStock: (id, stock) => {
        const branch = stock.branch;
        const price = stock.price;
        const quantity = stock.quantity;

        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO itemstock (item, branch, price, quantity) VALUES (?,?,?,?)',[id, branch, price, quantity], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    editItem: (id, body) => {
        const name = body.name;
        const image = body.image;
        const description = body.description;
        const category = body.category;

        return new Promise((resolve, reject) => {
            conn.query('UPDATE item SET name=?, image=?, description=?, category=? WHERE id=?',[name, image, description,category,id], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    editItemStock: (id, stock) => {
        const branch = stock.branch;
        const price = stock.price;
        const quantity = stock.quantity;

        return new Promise((resolve, reject) => {
            conn.query('UPDATE itemstock SET price=?, quantity=? WHERE item=? AND branch=?',[price, quantity, id, branch], (err, result) => {
                console.log(err);
                console.log(result);
                
                
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    deleteItem: (id) => {
        
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM item WHERE id=?',id, (err, result) => {
            console.log(err);

                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    }
}

module.exports = itemsModel;