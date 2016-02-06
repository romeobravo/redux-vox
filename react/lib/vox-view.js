import React from 'react'

class VoxView {
  constructor(settings) {
    this.routes = settings.routes
  }

  base() {
    return this.routes.component
  }

  go() {
    return [
      this.routes.component,
      this.routes.children['about'].component
    ]
  }
}

export default VoxView