class ModelRegister {
  constructor() {
    this.obj = {}
  }

  register(name, model) {
    this.obj[name] = model
  }

  get models() {
    return this.obj
  }
}

const Register = new ModelRegister
export default Register