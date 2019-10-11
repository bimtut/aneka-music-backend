const model = require('../models/items');
const formResponse = require('../helpers/formResponse');

const itemsController = {
    getItemsByCategory: (req, res) => {
        const id = req.params.id;

        model.getItemsByCategory(id)
        .then(result => {
            formResponse.success(res, 200, result);
        })
        .catch(error => {res.json(error);})
    },

    getItemsByBranch: (req,res) => {
        const id = req.params.id;

        model.getItemsByBranch(id)
        .then(result => {
            formResponse.success(res, 200, result);
        })
        .catch(error => {res.json(error);})
    },

    getItemsByName: (req,res) => {
        const name = req.params.name;

        model.getItemsByName(name)
        .then(result => {
            formResponse.success(res, 200, result);
        })
        .catch(error => {res.json(error);})
    },

    getItemDetails: (req, res) => {
        const id = req.params.id;

        model.getItemDetails(id)
        .then(result => {
            model.getItemStock(id)
            .then(rslt => {
                result = {
                    ...result[0],
                    itemstock : rslt
                }
                formResponse.success(res, 200, result);
            })
            .catch(error => {res.json(error)})
        })
        .catch(error => {res.json(error);})
    },

    addItem: (req, res) => {
        const body = {
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            category: req.body.category,
            itemstock: req.body.itemstock
        };

        model.addItem(body)
        .then(result => {
            model.getLastID()
            .then(itemID => {
                const id = itemID[0]['MAX (id)'];

                const itemstock = body.itemstock;
                itemstock.map((stock, index) => {
                    model.addItemStock(id, stock)
                    .then(rslt => {
                        const data = {
                            id,
                            ...body,
                        }

                        if(index == itemstock.length-1){
                            formResponse.success(res, 200, rslt, data);
                        }
                    })
                    .catch(error => {res.json(error);})
                })
            })
            .catch(error => {res.json(error);})
        })
        .catch(error => {res.json(error);})
    },

    editItem: async (req, res) => {
        const id = req.params.id;
        const body = {
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            category: req.body.category,
            itemstock: req.body.itemstock
        };

        await model.editItem(id,body)
        .then(async result => {
            
            const itemstock = body.itemstock;
            
            await model.getItemStock(id)
            .then(async dbStock => {
                //check if there are any new branch added
                if(itemstock.length > dbStock.length){
                    const data = {
                        id,
                        ...body,
                    }
                    
                    //splitting the stocks into new and old
                    const newStocks = [];
                    await itemstock.map(async (item,index) => {
                        let found = true;
                        await dbStock.map((dbitem, idx) => {
                            if(item.branch === dbitem.branch){found = false}
                        })
                        if(found){newStocks.push(item)}
                    })

                    const oldStocks = [];
                    await itemstock.map(async (item,index) => {
                        let found = false;
                        await dbStock.map((dbitem, idx) => {
                            if(item.branch === dbitem.branch){found = true}
                        })
                        if(found){oldStocks.push(item)}
                    })
                    
                    await newStocks.map(async (newstock, idx) => {
                       await model.addItemStock(id, newstock)
                        .then( async rsult => {
                            if(idx === newStocks.length-1){
                                //after adding new stock, then updating old stock   
                               
                                if(oldStocks.length > 0){

                                    await oldStocks.map( async (oldstock, index) => {
                                        await model.editItemStock(id, oldstock)
                                        .catch(error => {res.json(error);})
                                    })

                                }
                                await formResponse.success(res, 200, rsult, data); 
                            }
                        })
                        .catch(error => {res.json(error);})
                    })
                } else { //there is no new stock
                    itemstock.map((stock, index) => {
                        model.editItemStock(id, stock)
                        .then(rsult => {
                            const data = {
                                id,
                                ...body,
                            }
                         
                            if(index == itemstock.length-1){
                                formResponse.success(res, 200, rsult, data);
                            }
                        })
                        .catch(error => {res.json(error);})
                    })
                }
            })
            .catch(error => {res.json(error);})    
        })
        .catch(error => {res.json(error);})
    },

    deleteItem: (req, res) => {
        const id = req.params.id;
        
        model.deleteItem(id)
        .then(result => {
            const data = {
                id
            };
            
            formResponse.success(res,200,result,data);
        })
        .catch(error => {res.json(error);})
    }
}

module.exports = itemsController;