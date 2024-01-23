const categoryDataMapper = require("../dataMapper/category");
const sanitizeHTML = require("sanitize-html");

const categoryController = {
  async getOneCategory(request, response, next) {
    const { id } = request.params;
    // console.log(id);
    const { error, oneCategory } = await categoryDataMapper.getOneCategory(id);

    if (error) {
      next(error);
    } else {
      response.json(oneCategory);
    }
  },

  async createOneCategory(request, response, next) {
    //*! TODO: récupérer dynamiquement l'id du user pour le renseigner en tant que creator et l'envoyer à la DB
    const creator = 1;
    const { label } = request.body;

    const cleanLabel = sanitizeHTML(label);

    const { error, newCategory } = await categoryDataMapper.addNewCategory(
      cleanLabel,
      creator
    );

    if (error) {
      next(error);
    } else {
      response.json(newCategory);
    }
  },

  async deleteOneCategory(request, response, next) {
    const { id } = request.params;

    const { error, deletedCategory } =
      await categoryDataMapper.deleteOneCategory(id);

    if (error) {
      next(error);
    } else {
      response.json(true);
    }
  },

  async updateOneCategory(request, response, next) {
    const { id } = request.params;
    const { label } = request.body;

    const cleanLabel = sanitizeHTML(label);
    const { error, updatedCategory } =
      await categoryDataMapper.updateOneCategory(id, cleanLabel);

    if (error) {
      next(error);
    } else {
      response.json(updatedCategory);
    }
  },

  async getAllArticlesByCategory(request, response, next) {
    const { id } = request.params;

    const { error, articlesByCategory } =
      await categoryDataMapper.getAllArticlesByCategory(id);

    if (error) {
      next(error);
    } else {
      response.json(articlesByCategory);
    }
  },
};

module.exports = categoryController;
