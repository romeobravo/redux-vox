const Reset = "\x1b[0m"
const Bright = "\x1b[1m"
const Dim = "\x1b[2m"
const Underscore = "\x1b[4m"
const Blink = "\x1b[5m"
const Reverse = "\x1b[7m"
const Hidden = "\x1b[8m"

const FgBlack = "\x1b[30m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const FgBlue = "\x1b[34m"
const FgMagenta = "\x1b[35m"
const FgCyan = "\x1b[36m"
const FgWhite = "\x1b[37m"
const Colors = [FgRed, FgGreen, FgYellow, FgBlue, FgMagenta, FgCyan]

const BgBlack = "\x1b[40m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"

class MainLogger {
  constructor() {
    this.prefixLength = 0
    this.logLevel = 0
    this.colorIndex = 0
    this.nameRegister = {}
    this.levels = {
      verbose: 0,
      warning: 1,
      error: 2
    }
  }

  level(logLevel) {
    this.logLevel = this.levels[logLevel] || this.levels.verbose
  }

  output(level, name, msg) {
    if (level >= this.logLevel) console.log(this.format(name, msg))
  }

  register(name) {
    if (!this.nameRegister[name]) {
      if (name.length > this.prefixLength) this.prefixLength = name.length
      this.nameRegister[name] = this.colorIndex
      this.colorIndex++
    }
  }

  color(name) {
    return Colors[this.nameRegister[name]]
  }

  format(name, msg) {
    const padding = this.prefixLength - name.length
    let space = ''
    while (space.length < padding) space += ' '
    let string = `${this.time()}${space}${this.color(name)}${name} |${Reset} ${msg}`
    return string
  }

  time() {
    const date = new Date()
    let hour = date.getHours()
    hour = (hour < 10 ? '0' : '') + hour
    let min  = date.getMinutes()
    min = (min < 10 ? '0' : '') + min
    let sec  = date.getSeconds()
    sec = (sec < 10 ? '0' : '') + sec

    return `[${Dim}${hour}:${min}:${sec}${Reset}] `
  }
}

const main = new MainLogger

class Logger {
  constructor(name) {
    this.name = name
    main.register(name)
  }

  level(logLevel) {
    main.level(logLevel)
  }

  log(msg) {
    main.output(0, this.name, msg)
  }

}

export default Logger
