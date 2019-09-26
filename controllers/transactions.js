const transactionsModel = require('../models/transsactions');
const formResponse = require('../helpers/formResponse');
const async = require('async')

const transactionsController = {
    
    getUserTransactions: async (req, res) => {
        const user = req.params.id;

        let data = []

        await transactionsModel.getUserTransactions(user)
        .then(result => {
            data = result
            // let transactions = [];
            // result.map((transaction,index) => {
            //     transactionsModel.getTransactionItems(transaction.id)
            //     .then(rsult => {
            //         transaction = {
            //             ...transaction,
            //             transactionitems : rsult
            //         }
            //         transactions.push(transaction)

            //         if(index == result.length-1){
            //             formResponse.success(res, 200, transactions)
            //         }
            //     })
            //     .catch(error => {
            //         res.json(error);
            //     })
            // })
        })
        .catch(error => {
            res.json(error);
        })

         data.map((user, index) => {
            transactionsModel.getTransactionItems(user.id)
            .then(result => {
                data[index] = {
                    ...user,
                    transactionitems:result
                }
                if(index == data.length-1){
                    formResponse.success(res, 200, data)
                }
            })
            .catch(err => {
                res.json(err);
            });   
        })
        
        

        // async.eachSeries(data, (item, next) => {
        //     resultData.item = 1
        //     transactionsModel.getTransactionItems(item.id)
        //         .then(result => {
        //             item.transaction = result
                    
                    
        //             // console.log(item)
        //         })
        //         next()
        // })
        // formResponse.success(res, 200, data)

    },

    getTransactionsByMonth: (req, res) => {
        const month = req.params.month;

        transactionsModel.getTransactionsByMonth(month)
        .then(result => {
            
            let transactions = [];
            result.map((transaction,index) => {
               
                transactionsModel.getTransactionItems(transaction.id)
                .then(rsult => {
                    transaction = {
                        ...transaction,
                        transactionitems : rsult
                    }
                    transactions.push(transaction)

                    if(index == result.length-1){
                        formResponse.success(res, 200, transactions)
                    }
                })
                .catch(error => {
                    res.json(error);
                })
            })
        })
        .catch(error => {
            res.json(error);
        })
    },

    newTransaction: (req, res) => {
        const user = req.params.id;
        const transactionitems = req.body.transactionitems;
        
        transactionsModel.newTransaction(user)
        .then(result => {
            transactionsModel.getLastID()
            .then(async id => {
                id = id[0]['MAX (id)'];

                await transactionitems.map(async (item, index) => {
                    
                    await transactionsModel.addItem(id, item)
                    .then(rsult => {
                        
                        const data = {
                            id,
                            user,
                            transactionitems: [...transactionitems]
                        }
                        
                        if(index == transactionitems.length-1){
                            formResponse.success(res,200, rsult, data)
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        res.json(error);
                    })
                })
            })
            .catch(error => {
                res.json(error);
            })
        })
        .catch(error => {
            res.json(error);
        })
    }
}

module.exports = transactionsController;