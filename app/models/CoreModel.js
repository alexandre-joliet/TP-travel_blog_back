class CoreModel {
  id;

  constructor(obj) {
    if (Number.isInteger(obj.id)) {
      this.id = obj.id;
    } else {
      throw new Error('obj.id is not a number');
    }
  }

  get id() {
    return this.id;
  }
}

module.exports = CoreModel;