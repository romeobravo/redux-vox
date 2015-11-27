var knex = require('../../lib/knex');

function validateType(name, type, attribute) {
  var errors = [];
  switch(type) {
    case 'string':
      if(typeof(attribute) != 'string') {
        errors.push(`Attribute ${name} is not of type ${type}.`);
      }
      break;
  }  
  return errors
}

function validateMinLength(name, minLength, attribute) {
  var errors = [];
  if(attribute.length < minLength) {
    errors.push(`Attribute ${name} should be a minimum of ${minLength} characters.`);
  }
  return errors;
}

function validateMaxLength(name, maxLength, attribute) {
  var errors = [];
  if(attribute.length > maxLength) {
    errors.push(`Attribute ${name} should be a maximum of ${maxLength} characters.`);
  }
  return errors;
}

function validate(name, rules, attribute) {
  var errors = [];
  for(var i in rules) {
    switch(i) {
      case 'type':
        errors = errors.concat(validateType(name, rules[i], attribute));
        break;
      case 'minLength':
        errors = errors.concat(validateMinLength(name, rules[i], attribute));
        break;
      case 'maxLength':
        errors = errors.concat(validateMaxLength(name, rules[i], attribute));
        break;        
    }
  }
  return errors;
}

class Base {
  constructor(params) {
    this.errors = ['Object is not validated'];
    this.keys = [];
    return this.new(params);
  }

  static tableName() {
    return 'base';
  }

  static find(id) {
    return knex(this.tableName()).select().where({ id: id });
  }

  static all() {
    return knex(this.tableName()).select();
  }

  static count() {
    return knex(this.tableName()).select().count();
  }

  get() {
    var object = {};
    this.keys.forEach( key => object[key] = this[key] )
    return object;
  }

  new(params) {
    var self = this;
    var properties = {};
    self.keys = [];
    for(var i in params) {
      if(!self[i]) {
        self[i] = params[i];
      }
      self.keys.push(i);
    }
    return this;
  }

  validate() {
    this.errors = [];
    for(var i in this.validate) {
      this.errors = this.errors.concat(validate(i, this.validate[i], this[i]));
    }
    return this;
  }

  save() {
    this.validate();
    if(!this.errors.length)
      return knex(this.tableName).insert(this.get());
    else
      return this;
  }

  create(params) {
    this.new(params);
    return this.save();
  }

}

module.exports = Base