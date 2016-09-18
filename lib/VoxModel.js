import knex from './knex'
import register from './ModelRegister'

function validateType(name, type, attribute) {
  let errors = []
  switch(type) {
    case 'string':
      if(typeof(attribute) != 'string') {
        errors.push(`Attribute ${name} is not of type ${type}.`)
      }
      break
  }
  return errors
}

function validateMinLength(name, minLength, attribute) {
  let errors = []
  if(attribute.length < minLength) {
    errors.push(`Attribute ${name} should be a minimum of ${minLength} characters.`)
  }
  return errors
}

function validateMaxLength(name, maxLength, attribute) {
  let errors = []
  if(attribute.length > maxLength) {
    errors.push(`Attribute ${name} should be a maximum of ${maxLength} characters.`)
  }
  return errors
}

function validate(name, rules, attribute) {
  let errors = []
  for(let i in rules) {
    switch(i) {
      case 'type':
        errors = errors.concat(validateType(name, rules[i], attribute))
        break
      case 'minLength':
        errors = errors.concat(validateMinLength(name, rules[i], attribute))
        break
      case 'maxLength':
        errors = errors.concat(validateMaxLength(name, rules[i], attribute))
        break
    }
  }
  return errors
}

class VoxModel {
  constructor(params) {
    this.errors = ['Object is not validated']
    this.keys = []
    register.register(this)
    return this.new(params)
  }

  static tableName() {
    return 'base'
  }

  static find(id) {
    return knex(this.tableName()).select().where({ id: id })
  }

  static all() {
    return knex(this.tableName()).select()
  }

  static count() {
    return knex(this.tableName()).select().count()
  }

  get() {
    let object = {}
    this.keys.forEach( key => object[key] = this[key] )
    return object
  }

  new(params) {
    let self = this
    let properties = {}
    self.keys = []
    for(let i in params) {
      if(!self[i]) {
        self[i] = params[i]
      }
      self.keys.push(i)
    }
    return this
  }

  validate() {
    this.errors = []
    for(let i in this.validate) {
      this.errors = this.errors.concat(validate(i, this.validate[i], this[i]))
    }
    return this
  }

  save() {
    this.validate()
    if(!this.errors.length)
      return knex(this.tableName).insert(this.get())
    else
      return this
  }

  create(params) {
    this.new(params)
    return this.save()
  }

}

export default VoxModel
