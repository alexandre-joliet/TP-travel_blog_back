const CoreModel = require('./CoreModel');

class Category extends CoreModel {
  label;
  creator;

  constructor(obj) {
    super(obj);
    this.label = obj.label;
    this.creator = obj.creator;
  }

  // GETTER
  get label() {
    return this.label;
  }

  get creator() {
    return this.creator;
  } 

  // SETTER
  set label(value) {
    if (typeof value !== "string" || value === null) {
      throw Error("Label is not a string or is empty");
    }
    this.label = value;
  }

  set creator(value) {
    if (!isNaN(parseInt(value, 10))) {
      throw Error("Creator is not a number");
    }
    this.creator = value;
  }
}

module.exports = Category;