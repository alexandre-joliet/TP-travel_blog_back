BEGIN;

DROP TABLE IF EXISTS "role", "user", "article", "comment", "category", "article_has_category", "user_has_favorites";


CREATE TABLE IF NOT EXISTS "role" (
  "id" SERIAL PRIMARY KEY,
  "label" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "user" (
  "id" SERIAL PRIMARY KEY,
  "last_name" TEXT NOT NULL,
  "first_name" TEXT NOT NULL,
  "avatar" TEXT,
  "mail" TEXT NOT NULL,
  "pseudo" VARCHAR(32) NOT NULL,
  "password" TEXT NOT NULL,
  "role_id" INT NOT NULL REFERENCES "role"("id")
);

CREATE TABLE IF NOT EXISTS "article" (
  "id" SERIAL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "image" TEXT,
  "created_date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "author" INT NOT NULL REFERENCES "user"("id")
);

CREATE TABLE IF NOT EXISTS "comment" (
  "id" SERIAL PRIMARY KEY,
  "content" TEXT NOT NULL,
  "created_date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "article_id" INT NOT NULL REFERENCES "article"("id"),
  "author" INT NOT NULL REFERENCES "user"("id")
);

CREATE TABLE IF NOT EXISTS "category" (
  "id" SERIAL PRIMARY KEY,
  "label" TEXT NOT NULL UNIQUE,
  "creator" INT NOT NULL REFERENCES "user"("id")
);

CREATE TABLE IF NOT EXISTS "article_has_category" (
 "id" SERIAL PRIMARY KEY,
 "article_id" INT NOT NULL REFERENCES "article"("id"),
 "category_id" INT NOT NULL REFERENCES "category"("id")
);

CREATE TABLE IF NOT EXISTS "user_has_favorites" (
  "id" SERIAL PRIMARY KEY,
  "article_id" INT NOT NULL REFERENCES "article"("id"),
  "user_id" INT NOT NULL REFERENCES "user"("id"),
  UNIQUE ("article_id", "user_id")
);


COMMIT;