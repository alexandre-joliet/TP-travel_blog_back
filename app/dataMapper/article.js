const client = require("../services/database");

const articleDatamapper = {
  
  async getOneArticle (id) {
    const sqlQuery =
      'SELECT article.id, article.title, article.description, article.content, article.image, article.created_date, article.author, "user".pseudo, category.label, category.id AS CategoryId FROM article JOIN "user" ON article.author = "user".id JOIN article_has_category ON article.id = article_has_category.article_id JOIN category ON article_has_category.category_id = category.id  WHERE article.id=$1';

    let oneArticle;
    let error;

    try {
      const result = await client.query(sqlQuery, [id]);
      oneArticle = result.rows[0];
    } 
    catch (err) {
      error = err;
    }

    return { error, oneArticle };
  },

  async updateOneArticle (id, body) {
    const sqlQurey = {
      text: 'UPDATE article SET (title,description,content,image,author) = ($1, $2, $3, $4, $5) WHERE id=$6 RETURNING *',
      values: [body.title, body.description, body.content, body.image, body.author, id]
    }

    let updatedArticle;
    let error;

    try {
      const result = await client.query(sqlQuery, values);

      updatedArticle = result.rows[0];
    } 
    catch (err) {
      error = err;
    }

    return { error, updatedArticle };
  },

  
  // TODO: A REFACTORISER

  /**
   * Suppression d'un article par son id
   * @param {*} id
   */
  async deleteArticle(id) {
    console.log(`Id de l'article suprrimé `, id);
    const values = [id];
    // 1. vérifier que l'article dont on a l'id
    // n'a pas une catégorie rattachée

    const verifyQuery =
      "SELECT * FROM article_has_category WHERE article_id=$1";
    try {
      const article_response = await client.query(verifyQuery, values);

      console.log(
        "est-ce que je reçois quelque chose depuis article_has_category ? ",
        article_response.rows[0]
      );
      // 2. s'il y a une catégorie rattachée
      if (article_response.rows[0] != undefined) {
        // supprimer l'entrée dans article_has_category
        console.log(
          "je veux supprimer l'entrée dont l'id est: ",
          article_response.rows[0].id
        );
        const deleteQuery =
          "DELETE FROM article_has_category WHERE id=$1 RETURNING *";
        const article_has_categoryValues = [article_response.rows[0].id];
        try {
          const responseDelete = await client.query(
            deleteQuery,
            article_has_categoryValues
          );
          console.log(
            `J'ai bien une suppression de l'article_has_category`,
            responseDelete.rows[0]
          );
        } catch (err) {
          console.log(`J'ai l'erreur`, err);
        }
      }
    } catch (err) {
      console.log("error", err);
    }

    // 3. s'il n'y en pas (ou si elle vient d'être supprimée), tout va bien, on peut supprimer
    // l'article
    const sqlQuery = "DELETE FROM article WHERE id=$1 RETURNING *";

    let error;
    let article;
    try {
      const response = await client.query(sqlQuery, values);

      article = response.rows[0];
      console.log("Je renvoie l'article supprimé ", article);
      // Si article === undefined
      if (article === undefined) {
        throw new Error(`Il n'y as pas ce type d'article a supprimé`);
      }
    } catch (err) {
      error = err;
    }
    // je renvoie les infos au controller
    return { error, article };
  },
};

module.exports = articleDatamapper;
