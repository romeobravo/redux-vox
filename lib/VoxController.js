import api from './VoxApiRouter'

class VoxController {
  constructor(base) {
    this.base = base || '/'
    if(this.get)
      api.get(this.base, this.get)
    if(this.post)
      api.post(this.base, this.post)
    if(this.put)
      api.put(this.base, this.put)
    if(this.delete)
      api.delete(this.base, this.delete)
  }

  before(ctx, next) {

  }

  route(customRoutes) {
    for(var i in customRoutes) {
      if (customRoutes.hasOwnProperty(i)) {
        api.get(this.base + i, customRoutes[i])
      }
    }
  }
}

export default VoxController
