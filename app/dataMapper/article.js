const Article = require("../models/Article");
const client = require("../services/database");

const articleDatamapper = {
  async getOneArticle(id) {
    const sqlQuery =
      'SELECT article.id, article.title, article.description, article.content, article.image, article.created_date, article.author, "user".pseudo, category.label, category.id AS CategoryId FROM article JOIN "user" ON article.author = "user".id JOIN article_has_category ON article.id = article_has_category.article_id JOIN category ON article_has_category.category_id = category.id  WHERE article.id=$1';

    let oneArticle;
    let error;

    try {
      const results = await client.query(sqlQuery, [id]);
      oneArticle = new Article(results.rows[0]);
    } catch (err) {
      error = err;
    }

    return { error, oneArticle };
  },

  async createArticle(title, description, cleanContentHTML, image, category) {
    const createArticleSqlQuery = {
      text: "INSERT INTO article (title, description, content, image, author) VALUES ($1, $2, $3, $4, 1)",
      values: [title, description, cleanContentHTML, image],
    };

    const getNewArticleIdSqlQuery = {
      text: "SELECT id FROM article WHERE title = $1",
      values: [title],
    };

    const getCategoryIdSqlQuery = {
      text: "SELECT id FROM category WHERE label = $1",
      values: [category],
    };

    let createdArticle;
    let newArticleId;
    let categoryId;
    let createdCategoryRelation;
    let error;

    try {
      const resultCreate = await client.query(createArticleSqlQuery);
      createdArticle = resultCreate.rows[0];

      const resultGetArticle = await client.query(getNewArticleIdSqlQuery);
      newArticleId = resultGetArticle.rows[0].id;

      const resultGetCaterogy = await client.query(getCategoryIdSqlQuery);
      categoryId = resultGetCaterogy.rows[0].id;

      const createCategoryRelationSqlQuery = {
        text: "INSERT INTO article_has_category (article_id, category_id) VALUES ($1, $2)",
        values: [newArticleId, categoryId],
      };

      const resultCategoryRelation = await client.query(
        createCategoryRelationSqlQuery
      );
      createdCategoryRelation = resultCategoryRelation.rows[0];
    } catch (err) {
      error = err;
    }

    return { error, createdArticle };
  },

  async updateOneArticle(id, body) {
    const sqlQuery = {
      text: "UPDATE article SET (title, description, content, image, author) = ($1, $2, $3, $4, $5) WHERE id=$6 RETURNING *",
      values: [
        body.title,
        body.description,
        body.content,
        body.image,
        body.author,
        id,
      ],
    };

    let updatedArticle;
    let error;

    try {
      const results = await client.query(sqlQuery);
      updatedArticle = results.rowCount;
    } catch (err) {
      error = err;
    }

    return { error, updatedArticle };
  },

  async deleteArticle(id) {
    // 1. On vérifie que l'article n'a pas de catégorie associée
    const verifyQuery = {
      text: "SELECT * FROM article_has_category WHERE article_id = $1",
      values: [id],
    };
    try {
      const articleResponse = await client.query(verifyQuery);

      // 2. Si il y a une catégorie rattachée
      if (articleResponse.rows[0] != undefined) {
        const responseId = [articleResponse.rows[0].id];
        const deleteQuery = {
          text: "DELETE FROM article_has_category WHERE id = $1 RETURNING *",
          values: [responseId[0]],
        };

        try {
          const deleteResponse = await client.query(deleteQuery);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }

    // 3. Si il n'y en a pas (ou si elle vient d'être supprimée)
    const sqlQuery = {
      text: "DELETE FROM article WHERE id= $1 RETURNING *",
      values: [id],
    };

    let error;
    let articleFound;

    try {
      const response = await client.query(sqlQuery);

      articleFound = response.rows[0];

      if (articleFound === undefined) {
        throw new Error(`Aucun article à supprimer.`);
      }
    } catch (err) {
      error = err;
    }

    return { error, articleFound };
  },
};

module.exports = articleDatamapper;
