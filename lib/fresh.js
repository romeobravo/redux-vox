import path from 'path'
import fs from 'fs'
import stream from 'stream'

class Item {
  constructor(args) {
    this.location = args.location
    this.expires = args.expires
    this.lifetime = args.lifetime
    this.load()
  }

  load() {
    let data = fs.readFileSync(this.location, 'utf8')
    this.expires = (new Date).getTime() + this.lifetime * 1000
    this.buf = new Buffer(data, 'utf8')
  }

  freshen() {
    let now = (new Date).getTime()
    if(this.expires < now) {
      this.load()
    }
  }

  get stream() {
    this.freshen()
    let rs = new stream.Readable()
    rs.push(this.buf)
    rs.push(null)
    return rs
  }
}

class Cache {
  constructor(args) {
    this.maxage = args.maxage
    this.lifetime = args.lifetime
    this.store = {}
  }

  cache(location) {
    return this.store[location]
  }

  add(location) {
    this.store[location] = new Item({ location, lifetime: this.lifetime })
    return this.cache(location)
  }

  fetch(location) {
    if(this.cache(location)) {
      return this.cache(location).stream
    } else {
      return this.add(location).stream
    }
  }
}

class Fresh {
  constructor(args) {
    this.root = args.root || '/'
    this.maxage = args.maxAge || 0
    this.gzip = args.gzip === false ? false : true
    this.cache = new Cache({
      maxage: args.maxAge || 0,
      lifetime: args.lifetime || 3600
    })
  }

  send(ctx) {
    let location = path.join(this.root, ctx.path)
    ctx.type = path.extname(path.basename(location, '.gz'))
    ctx.body = this.cache.fetch(location)
  }
}

export default Fresh