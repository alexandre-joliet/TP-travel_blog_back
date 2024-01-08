const articlesDatamapper = require('./articles');
const articleDatamapper = require('./article');
const categeoriesDatamapper = require('./categories');
const categoryDataMapper = require('./category');
const addFavoritesDatamapper = require('./favorites');

module.exports = {
  articleDatamapper,
  articlesDatamapper,
  categeoriesDatamapper,
  categoryDataMapper,
  addFavoritesDatamapper
};