const CoreModel = require("./CoreModel");

class Article extends CoreModel {
  title;
  description;
  content;
  image;
  created_date;
  author;
  label;
  categoryid;
   

  constructor(obj) {
    super(obj);
    this.title = obj.title;
    this.description = obj.description;
    this.content = obj.content;
    this.image = obj.image;
    this.created_date = obj.created_date;
    this.author = obj.author;
    this.label = obj.label;
    this.categoryid = obj.categoryid;
  }

  // GETTER
  get title() {
    return this.title;
  }

  get description() {
    return this.description;
  }

  get content() {
    return this.content;
  }

  get image() {
    return this.image;
  }

  get created_date() {
    return this.created_date;
  }

  get author() {
    return this.author;
  }

  get label() {
    return this.label;
  }

  get categoryid() {
    return this.categoryid;
  }


  // SETTER
  set title(value) {
    if (typeof value !== "string" || value === null) {
      throw Error("Title is not a string or is empty");
    }
    this.title = value;
  }

  set description(value) {
    if (typeof value !== "string" || value === null) {
      throw Error("Description is not a string or is empty");
    }
    this.description = value;
  }

  set content(value) {
    if (typeof value !== "string" || value === null) {
      throw Error("Content is not a string or is empty");
    }
    this.content = value;
  }

  set image(value) {
    if (typeof value !== "string") {
      throw Error("Image is not a string");
    }
    this.image = value;
  }

  set author(value) {
    if (!isNaN(parseInt(value, 10))) {
      throw Error("Author is not a number");
    }
    this.author = value;
  }
}

module.exports = Article;
