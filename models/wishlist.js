const conn = require('../configs/db');

const wishlistModel = {

    getWishlist: (user) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT item.id, item.name, item.image FROM wishlist JOIN item ON item.id=wishlist.item WHERE wishlist.user=?', user, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    addWishlist: (user, item) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO wishlist (user, item) VALUES (?,?)', [user, item], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    deleteWishlist: (user, item) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM wishlist WHERE user=? AND item=?', [user, item], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    }
}

module.exports = wishlistModel;