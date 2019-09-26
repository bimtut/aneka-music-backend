const conn = require('../configs/db');

const cartModel = {
    getCart: (user) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT cart.item as itemID, item.name as item, itemstock.price, cart.branch as branchID, branch.location as branch, cart.quantity FROM cart JOIN itemstock ON itemstock.item = cart.item AND itemstock.branch = cart.branch JOIN item ON itemstock.item = item.id JOIN branch ON itemstock.branch = branch.id  WHERE cart.user=?', user, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    getOneCart: (user,item, branch) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT cart.item as itemID, item.name as item, itemstock.price, cart.branch as branchID, branch.location as branch, cart.quantity FROM cart JOIN itemstock ON itemstock.item = cart.item AND itemstock.branch = cart.branch JOIN item ON itemstock.item = item.id JOIN branch ON itemstock.branch = branch.id  WHERE cart.user=? AND cart.item=? AND cart.branch=?', [user, item, branch], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    addCart: (user, body) => {
        const item = body.item;
        const branch = body.branch;
        const quantity = body.quantity;
        
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO cart (user, item, branch, quantity) VALUES (?,?,?,?)', [user, item, branch, quantity], (err, result) => {
               
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    editCart: (user, body) => {
        const item = body.item;
        const branch = body.branch;
        const quantity = body.quantity;

        return new Promise((resolve, reject) => {
            conn.query('UPDATE cart SET quantity=? WHERE user=? AND item=? AND branch=?', [quantity,user, item, branch], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    deleteCart: (user, item, branch) => {
      
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM cart WHERE user=? AND item=? AND branch=?', [user, item, branch], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    clearCart: (user) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM cart WHERE user=?', user, (err, result) => {
                console.log(err);
                console.log(result);
                
                
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    }
}

module.exports = cartModel;