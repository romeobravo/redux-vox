import fs from 'fs'
import path from 'path'
const modelDir = path.join(__dirname, '..', 'api', 'models')

class ModelRegister {
  constructor() {
    this.modelList = {}
  }

  register(instance) {
    this.modelList[instance.constructor.name] = instance.constructor
  }

  instantiateModels() {
    fs.readdirSync(modelDir).forEach((modelName) => {
      const modelPath = path.join(modelDir, modelName)
      const modelClass = require(modelPath).default
      new modelClass()
    })
  }

  get models() {
    return this.modelList
  }

  model(name) {
    return this.modelList[name]
  }
}

const register = new ModelRegister
export default register
