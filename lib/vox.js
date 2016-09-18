import VoxController from './VoxController'
import VoxModel from './VoxModel'
import register from './ModelRegister'

class Vox {

  constructor() {

  }

  get controller() {
    return VoxController
  }

  get model() {
    return VoxModel
  }

  registerModels() {
    register.instantiateModels()
    for (let modelName in register.models) {
      this[modelName] = register.models[modelName]
    }

  }

  get models() {
    return this.models
  }

}

const vox = new Vox

export default vox
