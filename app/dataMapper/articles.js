const client = require("../services/database");

const articlesDatamapper = {

  async findAll() {
    const sqlQuery =
      'SELECT article.id, article.title, article.description, article.content, article.image, article.created_date, article.author, "user".pseudo, category.label, category.id AS CategoryId FROM article JOIN "user" ON article.author = "user".id JOIN article_has_category ON article.id = article_has_category.article_id JOIN category ON article_has_category.category_id = category.id ORDER BY article.id DESC';

    let allArticles;
    let error;

    try {
      const result = await client.query(sqlQuery);
      allArticles = result.rows;
      // console.log('Articles', articles);
    } 
    catch (err) {
      error = err;
    }

    return { error, allArticles };
  },
};

module.exports = articlesDatamapper;
