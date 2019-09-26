const categoriesModel = require("../models/categories");
const formResponse = require("../helpers/formResponse");

const categoriesController = {
  getCategories: (req, res) => {
    categoriesModel
      .getCategories()
      .then(result => {
        formResponse.success(res, 200, result);
      })
      .catch(error => {
        res.json(error);
      });
  },

  addCategory: (req, res) => {
    const body = {
      name: req.body.name,
      image: req.body.image
    };

    categoriesModel
      .addCategory(body)
      .then(result => {
        categoriesModel
          .getLastID()
          .then(id => {
            
            const data = {
              id: id[0]['MAX (id)'],
              ...body
            };
            formResponse.success(res, 200, result, data);
          })
          .catch(error => {
            res.json(error);
          });
      })
      .catch(error => {
        res.json(error);
      });
  },

  editCategory: (req, res) => {
    const id = req.params.id;
    const body = {
      name: req.body.name,
      image: req.body.image
    };

    categoriesModel
      .editCategory(id, body)
      .then(result => {
        const data = {
          id: id,
          ...body
        };
        formResponse.success(res, 200, result, data);
      })
      .catch(error => {
        res.josn(error);
      });
  },

  deleteCategory: (req, res) => {
    const id = req.params.id;

    categoriesModel
      .deleteCategory(id)
      .then(result => {
        const data = {
          id
        };
        formResponse.success(res, 200, result, data);
      })
      .catch(error => {
        res.json(error);
      });
  }
};

module.exports = categoriesController;
