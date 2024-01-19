const Article = require("../models/Article");
const Category = require("../models/Category");
const client = require("../services/database");

const categoryDataMapper = {
  async getOneCategory(id) {
    const sqlQuery = {
      text: 'SELECT * FROM "category" WHERE id = $1',
      values: [id],
    };

    let oneCategory;
    let error;

    try {
      const results = await client.query(sqlQuery);
      oneCategory = new Category(results.rows[0]);

      if (!oneCategory) {
        throw new Error(`Aucune catégorie correspondante n'a été trouvée !`);
      }
    } catch (err) {
      error = err;
    }

    return { error, oneCategory };
  },

  async addNewCategory(value, creator) {
    const sqlQuery = {
      text: 'INSERT INTO category ("label", "creator") VALUES ($1, $2)',
      values: [value.label, creator],
    };

    let newCategory;
    let error;

    try {
      const results = await client.query(sqlQuery);
      newCategory = results.rowCount;
    } catch (err) {
      error = err;
    }

    return { error, newCategory };
  },

  async deleteOneCategory(id) {
    const sqlQuery = {
      text: "DELETE FROM category WHERE id = $1",
      values: [id],
    };

    let deletedCategory;
    let error;

    try {
      const results = await client.query(sqlQuery);
      deletedCategory = results.rowCount;
    } catch (err) {
      error = err;
    }

    return { error, deletedCategory };
  },

  async updateOneCategory(id, label) {
    const sqlQuery = {
      text: "UPDATE category SET label = $2 WHERE id = $1",
      values: [id, label],
    };

    let updatedCategory;
    let error;

    try {
      const results = await client.query(sqlQuery);
      console.log(results);
      updatedCategory = results.rowCount;
    } catch (err) {
      error = err;
    }

    return { error, updatedCategory };
  },

  async getAllArticlesByCategory(id) {
    const sqlQuery = {
      text: 'SELECT article.id, article.title, article.description, article.content, article.image, article.created_date, article.author, "user".pseudo, category.label, category.id AS CategoryId FROM article JOIN "user" ON article.author = "user".id JOIN article_has_category ON article.id = article_has_category.article_id JOIN category ON article_has_category.category_id = category.id WHERE category.id = $1',
      values: [id],
    };

    let articlesByCategory = [];
    let error;

    try {
      const results = await client.query(sqlQuery);

      results.rows.forEach((article) => {
        const foundArticle = new Article(article);
        articlesByCategory.push(foundArticle);
      });
    } catch (err) {
      error = err;
    }
    return { error, articlesByCategory };
  },
};

module.exports = categoryDataMapper;
