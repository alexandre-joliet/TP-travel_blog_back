const CoreModel = require('./CoreModel');

class User extends CoreModel {
  last_name;
  first_name;
  avatar;
  mail;
  pseudo;
  password;
  role_id;

  constructor(obj) {
    super(obj);
    this.last_name = obj.last_name;
    this.first_name = obj.first_name;
    this.avatar = obj.avatar;
    this.mail = obj.mail;
    this.pseudo = obj.pseudo;
    this.password = obj.password;
    this.role_id = obj.role_id;
  }

  // GETTER
  get last_name() {
    return this.last_name;
  }

  get first_name() {
    return this.first_name;
  }

  get avatar() {
    return this.avatar;
  }

  get mail() {
    return this.mail;
  }

  get pseudo() {
    return this.pseudo;
  }

  get password() {
    return this.password;
  }

  get role_id() {
    return this.role_id;
  }


  // SETTER
  set last_name(value) {
    if (typeof value !== 'string' || value === null) {
      throw Error('Last name is not a string or is empty')
    }
    this.last_name = value;
  }

  set first_name(value) {
    if (typeof value !== 'string' || value === null) {
      throw Error('First name is not a string or is empty')
    }
    this.first_name = value;
  }

  set avatar(value) {
    if (typeof value !== 'string') {
      throw Error('Avatar is not a string')
    }
    this.avatar = value;
  }

  set mail(value) {
    if (typeof value !== 'string' || value === null) {
      throw Error('Mail is not a string or is empty')
    }
    this.mail = value;
  }
  
  set pseudo(value) {
    if (typeof value !== 'string' || value === null) {
      throw Error('Pseudo is not a string or is empty')
    }
    this.pseudo = value;
  }

  set password(value) {
    if (typeof value !== 'string' || value === null) {
      throw Error('Password is not a string or is emppty')
    }
    this.password = value;
  }

  set role_id(value) {
    if (!isNaN(parseInt(value, 10))) {
      throw Error('Role ID is not a number or is emppty')
    }
    this.role_id = value;
  }
}

module.exports = User;