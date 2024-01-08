const client = require('../services/database');

const articlesDatamapper = {
  /**
   * Récupération de toutes les articles
   * @returns tous les articles
   */
  async findAll () {
    const sqlQuery='SELECT article.id, article.title, article.description, article.content, article.image, article.created_date, article.author, "user".pseudo, category.label, category.id AS CategoryId FROM article JOIN "user" ON article.author = "user".id JOIN article_has_category ON article.id = article_has_category.article_id JOIN category ON article_has_category.category_id = category.id ORDER BY article.id DESC';

    let articles;
    let error;
    try {
      const response = await client.query(sqlQuery);

      articles = response.rows;
      // console.log('Articles', articles);
    }
    catch (err) {
      error = err;
    }

    // s'il y'a aucune erreur alors on retourne les articles
    // s'il existe une erreur alors les posts seront vides
    return { error, articles };
  }
};

module.exports = articlesDatamapper;